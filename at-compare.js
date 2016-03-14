(function (factory) {
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

  return angular.module('atCompare', [])
    .directive('compare', function () {
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

      var supportSyntax = '["===","==","!==","!=",">=",">","<=","<"]';

      return {
        restrict: 'A',
        require: 'ngModel',
        scope: {},
        link: function postLink($scope, $element, $attrs, ctrl) {

          var REG = /^(\w+)\s*([\<\!\=\>]{1,3})\s*(\w+)$/i;

          var list = [];

          $attrs.compare.split(';').forEach(function (v) {
            if (!v) return;
            v = v.trim();
            if (!REG.test(v)) {
              console.error('Uncaught Syntax Error: 【%s】 is not the compare directive,please use %s', v, supportSyntax);
              return;
            }
            var result = REG.exec(v);
            var obj = {};
            obj.source = result[1];
            obj.mode = result[2];
            obj.target = result[3];
            list.push(obj);
          });

          var form = $element.inheritedData("$formController");

          angular.forEach(list, function (v) {

            var source = form[v.source];
            var target = form[v.target];

            var compareFn = compare[v.mode];

            var syntax = v.source + v.mode + v.target;

            if (!compareFn) {
              console.error('Uncaught Syntax Error: 【%s】 is not the compare directive,please use %s', syntax, supportSyntax);
              return false;
            }

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