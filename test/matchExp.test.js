/**
 * Created by axetroy on 16-3-28.
 */

var exp = require('./matchExp.js');
var expect = require('chai').expect;

describe('匹配是否为正确的表达式', function () {

  var list = [
    // normal
    {
      name: 'a == b',
      result: true
    },
    {
      name: 'a === b',
      result: true
    },
    {
      name: 'a !== b',
      result: true
    },
    {
      name: 'a != b',
      result: true
    },
    {
      name: 'a >= b',
      result: true
    },
    {
      name: 'a > b',
      result: true
    },
    {
      name: 'a <= b',
      result: true
    },

    // in $scope left
    {
      name: 'a in $scope == b',
      result: true
    },
    {
      name: 'a in $scope === b',
      result: true
    },
    {
      name: 'a in $scope !== b',
      result: true
    },
    {
      name: 'a in $scope != b',
      result: true
    },
    {
      name: 'a in $scope >= b',
      result: true
    },
    {
      name: 'a in $scope > b',
      result: true
    },
    {
      name: 'a in $scope <= b',
      result: true
    },

    // in $scope right
    {
      name: 'a == b in $scope ',
      result: true
    },
    {
      name: 'a === b in $scope',
      result: true
    },
    {
      name: 'a !== b in $scope',
      result: true
    },
    {
      name: 'a != b in $scope',
      result: true
    },
    {
      name: 'a >= b in $scope',
      result: true
    },
    {
      name: 'a > b in $scope',
      result: true
    },
    {
      name: 'a <= b in $scope',
      result: true
    },

    // in scope left no $
    {
      name: 'a in scope == b',
      result: true
    },
    {
      name: 'a in scope === b',
      result: true
    },
    {
      name: 'a in scope !== b',
      result: true
    },
    {
      name: 'a in scope != b',
      result: true
    },
    {
      name: 'a in scope >= b',
      result: true
    },
    {
      name: 'a in scope > b',
      result: true
    },
    {
      name: 'a in scope <= b',
      result: true
    },

    // in scope right no $
    {
      name: 'a == b in scope ',
      result: true
    },
    {
      name: 'a === b in scope',
      result: true
    },
    {
      name: 'a !== b in scope',
      result: true
    },
    {
      name: 'a != b in scope',
      result: true
    },
    {
      name: 'a >= b in scope',
      result: true
    },
    {
      name: 'a > b in scope',
      result: true
    },
    {
      name: 'a <= b in scope',
      result: true
    },


    // with number
    {
      name: 'a  ==  0',
      result: true  // false
    },
    {
      name: ' a   === 1',
      result: true
    },
    {
      name: '  a !== 2',
      result: true
    },
    {
      name: '  a !=  3',
      result: true
    },
    {
      name: 'a >= 5',
      result: true    // false
    },
    {
      name: '  a  >   5',
      result: true    // false
    },
    {
      name: ' a  <  =   3',
      result: false
    },


    // with quote
    {
      name: 'a  ==  "0"',
      result: true  // false
    },
    {
      name: ' a   === "1"',
      result: true
    },
    {
      name: '  a !== "2"',
      result: true
    },
    {
      name: "  a !=  '3'",
      result: true
    },
    {
      name: '"a" >= 5',
      result: true    // false
    },
    {
      name: '  "a"  >   5',
      result: true    // false
    },
    {
      name: " 'a'  <  =   '3'",
      result: false
    },

    // with space and ;
    {
      name: 'a  ==  b in   scope  ',
      result: true  // false
    },
    {
      name: ' a   === b in scope ;;',
      result: true
    },
    {
      name: '  a !== b in scope ; ',
      result: true
    },
    {
      name: '  a !=  b  in scope ',
      result: true
    },
    {
      name: 'a >= b  in  scope ',
      result: true    // false
    },
    {
      name: '  a  >   b   in  scope ',
      result: true    // false
    },
    {
      name: ' a  <  =   b  in  scope ',
      result: false
    },


    // bad example
    {
      name: 'a ==== b',
      result: false
    },
    {
      name: 'a >>= b',
      result: false
    },
    {
      name: 'a <<= b',
      result: false
    },
    {
      name: 'a !!= b',
      result: false
    },
    {
      name: 'a =!= b',
      result: false
    },
    {
      name: 'a <!= b',
      result: false
    },
    {
      name: 'a >!= b',
      result: false
    }
  ];

  list.forEach(function (v) {
    it(v.name + ' to be ' + v.result, function () {
      expect(exp.test(v.name)).to.be.equal(v.result);
    });
  });

});

function splitArray(str) {
  var arr = [];
  str.split(';').forEach(function (v) {
    if (!v) return;
    arr.push(v.trim());
  });
  return arr;
}

var mul = [
  {
    name: 'a >= b  ;a<c  ',
    result: ['a >= b', 'a<c']
  },
  {
    name: 'a >= b;a>c ',
    result: ['a >= b', 'a>c']
  },
  {
    name: 'a == b  ;a<=c ',
    result: ['a == b', 'a<=c']
  },
  {
    name: 'a === b ;a<c  ',
    result: ['a === b', 'a<c']
  },
  {
    name: 'a !== b ;a===c  ',
    result: ['a !== b', 'a===c']
  },
  {
    name: 'a != b ;a<=c  ',
    result: ['a != b', 'a<=c']
  },
  {
    name: 'a >= b ;a>=c  ',
    result: ['a >= b', 'a>=c']
  }
];

describe('测试多个表达式是否正确截取', function () {
  mul.forEach(function (v) {
    it(v.name + ' to be ' + JSON.stringify(v.result), function () {
      expect(splitArray(v.name)).to.be.deep.equal(v.result);
    });
  });

});