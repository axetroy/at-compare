;(function (factory) {
  'use strict';
  var g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
  var module = g.module;
  var define = g.define;

  if (typeof module !== "undefined" && typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  }
  if (typeof define !== "undefined" && typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    define(function () {
      return factory();
    });
  }
  if (g.angular) {
    factory();
  }
})(function (undefined) {
  'use strict';
  var ｇ = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
  var angular = ｇ.angular;

  /**
   * 匹配表达式的正则表达式
   * @type {RegExp}
   */
  var EXPRESSION_REG = /^(\w+)\s*([\<\!\=\>]{1,3})\s*(\w+)$/i;

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
    '>=': function (a, b) {
      return parseFloat(a) >= parseFloat(b);
    },
    '>': function (a, b) {
      return parseFloat(a) > parseFloat(b);
    },
    '<=': function (a, b) {
      return parseFloat(a) <= parseFloat(b);
    },
    '<': function (a, b) {
      return parseFloat(a) < parseFloat(b);
    }
  };

  /**
   * 支持的语法
   * @type {string}
   */
  var supportSyntax = '["===","==","!==","!=",">=",">","<=","<"]';

  return angular.module('atCompare', [])
    .directive('atCompare', function () {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function postLink($scope, $element, $attrs, ctrl) {

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

          $attrs.compare.split(';').forEach(function (v) {
            var match,        // 匹配到的数组
              obj = {};       // 临时哈希表
            if (!v) return;

            v = v.trim();

            if (!EXPRESSION_REG.test(v)) {
              console.error('Uncaught Syntax Error: 【%s】 is not the compare directive,please use %s', v, supportSyntax);
              return;
            }

            match = EXPRESSION_REG.exec(v);

            /**
             * 表达式a>b
             */
            obj.source = match[1];    // a
            obj.mode = match[2];      // >
            obj.target = match[3];    // b
            list.push(obj);
          });

          angular.forEach(list, function (v) {

            /**
             * 表达式a>b
             */
            var source = form[v.source];      // a
            var target = form[v.target];      // b

            var compareFn = compare[v.mode];  // 对比函数

            var syntax = v.source + v.mode + v.target;    // 当前语法

            if (!compareFn) {
              console.error('Uncaught Syntax Error: 【%s】 is not the compare directive,please use %s', syntax, supportSyntax);
              return false;
            }

            /**
             * 给当前指令的input
             * $setValidity
             */
            ctrl.$parsers.push(function (viewValue) {
              ctrl.$setValidity(syntax, compareFn(source.$viewValue, target.$viewValue));
              return viewValue;
            });

            target.$parsers.push(function (viewValue) {
              ctrl.$setValidity(syntax, compareFn(source.$viewValue, target.$viewValue));
              return viewValue;
            });

          });

        }
      };
    });
});