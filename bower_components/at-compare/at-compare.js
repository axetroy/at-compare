;(function (factory) {
  'use strict';
  var g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
  var module = g.module;
  var define = g.define;

  if (typeof module !== "undefined" && typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(g.angular);
  }
  if (typeof define !== "undefined" && typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    define(function () {
      return factory(g.angular);
    });
  }
  if (g.angular) {
    factory(g.angular);
  }
})(function (angular) {
  'use strict';

  /**
   * 匹配表达式的正则表达式
   * @type {RegExp}
   */
  var EXPRESSION_REG = /^([\w\$\.]+)\s*(in \$?scope)?\s*([\<\!\=\>]{1,3})\s*(['|"]?[\w\$\.]+['|"]?)\s*(in \$?scope)?$/;

  /**
   * 不同语法执行的对比函数
   */
  var compare = {
    '===': function (a, b) {
      return a === b;
    },
    '==': function (a, b) {
      return a == b;
    },
    '!==': function (a, b) {
      return a !== b;
    },
    '!=': function (a, b) {
      return a != b;
    },
    /**
     *  所有如果a,b不是数字，或者parseFloat之后不是数字，结果会是NaN
     *  任何东西和NaN比，都会是false
     */
    '>=': function (a, b) {
      a = a || 0;
      b = b || 0;
      return parseFloat(a) >= parseFloat(b);
    },
    '>': function (a, b) {
      a = a || 0;
      b = b || 0;
      return parseFloat(a) > parseFloat(b);
    },
    '<=': function (a, b) {
      a = a || 0;
      b = b || 0;
      return parseFloat(a) <= parseFloat(b);
    },
    '<': function (a, b) {
      a = a || 0;
      b = b || 0;
      return parseFloat(a) < parseFloat(b);
    }
  };

  /**
   * 支持的语法
   * @type {string}
   */
  var supportSyntax = '["===","==","!==","!=",">=",">","<=","<"]';

  return angular.module('atCompare', [])
    .directive('atCompare', ['$parse', '$timeout', '$log', function ($parse, $timeout, $log) {
      return {
        restrict: 'A',
        require: 'ngModel',
        // scope: false,
        link: function postLink($scope, $element, $attrs, ctrl) {

          $timeout(function () {
            /**
             * 存放指令所含有的表达式
             * @type {Array}
             */
            var list = [];

            /**
             * 当前input所处在的父级表单
             * @type {*|any}
             */
            var form = $element.inheritedData("$formController");

            $attrs.atCompare.split(';').forEach(function (v) {
              var match,        // 匹配到的数组
                obj = {};       // 临时哈希表
              if (!v) return;

              v = v.trim();

              if (!EXPRESSION_REG.test(v)) {
                $log.error('Uncaught Syntax Error: [%s] is not the compare directive,please use %s || %s', v, supportSyntax, $element[0].outerHTML);
                return;
              }

              match = EXPRESSION_REG.exec(v);

              /**
               * 表达式a>b
               */
              obj.source = match[1];    // a
              obj.sourceInScope = !!match[2]; // 是否从scope拿变量

              obj.mode = match[3];      // >

              obj.target = match[4];    // b
              obj.targetInScope = !!match[5]; // 是否从scope拿变量

              list.push(obj);
            });

            angular.forEach(list, function (v) {

              /**
               * 表达式a>b
               */
              var source = v.source;
              var target = v.target;

              var syntax = v.source + v.mode + v.target;    // 当前语法

              // 如果是$scope下的变量
              if (!!v.sourceInScope) {
                source = $parse(v.source)($scope);
              } else {
                source = v.source;
                // 如果是数字
                if (/^\s*[\d\.?\d)]+\s*$/.test(v.source)) {
                  source = parseFloat(v.source);
                }
                // 如果是字符串
                else if (/^['|"][\w\$\.]+['|"]$/.test(v.source)) {
                  source = source.replace(/^['|"](.*)['|"]$/, '$1');
                }
                // 默认是name值
                else {
                  source = form[v.source];
                }
              }


              if (!!v.targetInScope) {
                target = $parse(v.target)($scope);
              } else {
                target = v.target;
                if (/^\s*[\d\.?\d)]+\s*$/.test(v.target)) {
                  target = parseFloat(v.target);
                }
                else if (/^['|"][\w\$\.]+['|"]$/.test(v.target)) {
                  target = target.replace(/^['|"](.*)['|"]$/, '$1');
                }
                else {
                  target = form[v.target];
                }
              }

              var compareFn = compare[v.mode];  // 对比函数

              if (!compareFn) {
                $log.error('Uncaught Syntax Error: [%s] is not the compare directive,please use %s || %s', syntax, supportSyntax, $element[0].outerHTML);
                return false;
              }

              ctrl.$parsers.push(function (viewValue) {

                // 重新获取一次值，防止$scope下的变量发生变化，或是从异步获取得来的
                if (!!v.sourceInScope) source = $parse(v.source)($scope);
                if (!!v.targetInScope) target = $parse(v.target)($scope);

                ctrl.$setValidity(syntax, compareFn((source && source.$parsers) ? source.$viewValue : source, target && target.$parsers ? target.$viewValue : target));
                return viewValue;
              });

              if (angular.isObject(target) && angular.isArray(target.$parsers)) {

                if (!!v.sourceInScope) source = $parse(v.source)($scope);
                if (!!v.targetInScope) target = $parse(v.target)($scope);

                target.$parsers.push(function (viewValue) {
                  ctrl.$setValidity(syntax, compareFn((source && source.$parsers) ? source.$viewValue : source, (target && target.$parsers) ? target.$viewValue : target));
                  return viewValue;
                });
              }

            });

          });

        }
      };
    }]);
});