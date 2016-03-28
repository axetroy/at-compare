/**
 * Created by axetroy on 16-3-28.
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

module.exports = compare;