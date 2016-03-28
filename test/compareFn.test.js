/**
 * Created by axetroy on 16-3-28.
 */
/**
 * Created by axetroy on 16-3-14.
 */

var compare = require('./compareFn.js');
var expect = require('chai').expect;

describe('对比函数==', function () {
  var undefined;
  // ==
  it('1==1 to be true', function () {
    expect(compare['=='](1, 1)).to.be.equal(true);
  });
  it('1==2 not to be false', function () {
    expect(compare['=='](1, 2)).to.be.equal(false);
  });
  it('1=="1" to be true', function () {
    expect(compare['=='](1, '1')).to.be.equal(true);
  });
  it('0==0 to be true', function () {
    expect(compare['=='](0, 0)).to.be.equal(true);
  });
  it('0=="0" to be true', function () {
    expect(compare['=='](0, '0')).to.be.equal(true);
  });
  it('0==undefined to be false', function () {
    expect(compare['=='](0, undefined)).to.be.equal(false);
  });
  it('0==false to be true', function () {
    expect(compare['=='](0, false)).to.be.equal(true);
  });
  it('0==null to be false', function () {
    expect(compare['=='](0, null)).to.be.equal(false);
  });
  it('0=="" to be true', function () {
    expect(compare['=='](0, '')).to.be.equal(true);
  });
  it('0==NaN to be false', function () {
    expect(compare['=='](0, NaN)).to.be.equal(false);
  });

});

describe('对比函数===', function () {
  var undefined;
  // ==
  it('1===1 to be true', function () {
    expect(compare['==='](1, 1)).to.be.equal(true);
  });
  it('1===2 not to be false', function () {
    expect(compare['==='](1, 2)).to.be.equal(false);
  });
  it('1==="1" to be false', function () {
    expect(compare['==='](1, '1')).to.be.equal(false);
  });
  it('0===0 to be true', function () {
    expect(compare['==='](0, 0)).to.be.equal(true);
  });
  it('0==="0" to be false', function () {
    expect(compare['==='](0, '0')).to.be.equal(false);
  });
  it('0===undefined to be false', function () {
    expect(compare['==='](0, undefined)).to.be.equal(false);
  });
  it('0===false to be false', function () {
    expect(compare['==='](0, false)).to.be.equal(false);
  });
  it('0===null to be false', function () {
    expect(compare['==='](0, null)).to.be.equal(false);
  });
  it('0==="" to be false', function () {
    expect(compare['==='](0, '')).to.be.equal(false);
  });
  it('0===NaN to be false', function () {
    expect(compare['==='](0, NaN)).to.be.equal(false);
  });

});

describe('对比函数!==', function () {
  var undefined;
  // ==
  it('1!==1 to be false', function () {
    expect(compare['!=='](1, 1)).to.be.equal(false);
  });
  it('1!==2 not to be true', function () {
    expect(compare['!=='](1, 2)).to.be.equal(true);
  });
  it('1!=="1" to be true', function () {
    expect(compare['!=='](1, '1')).to.be.equal(true);
  });
  it('0!==0 to be false', function () {
    expect(compare['!=='](0, 0)).to.be.equal(false);
  });
  it('0!=="0" to be true', function () {
    expect(compare['!=='](0, '0')).to.be.equal(true);
  });
  it('0!==undefined to be true', function () {
    expect(compare['!=='](0, undefined)).to.be.equal(true);
  });
  it('0!==false to be true', function () {
    expect(compare['!=='](0, false)).to.be.equal(true);
  });
  it('0!==null to be true', function () {
    expect(compare['!=='](0, null)).to.be.equal(true);
  });
  it('0!=="" to be true', function () {
    expect(compare['!=='](0, '')).to.be.equal(true);
  });
  it('0!==NaN to be true', function () {
    expect(compare['!=='](0, NaN)).to.be.equal(true);
  });

});

describe('对比函数!=', function () {
  var undefined;
  // ==
  it('1!=1 to be false', function () {
    expect(compare['!='](1, 1)).to.be.equal(false);
  });
  it('1!=2 not to be true', function () {
    expect(compare['!='](1, 2)).to.be.equal(true);
  });
  it('1!="1" to be false', function () {
    expect(compare['!='](1, '1')).to.be.equal(false);
  });
  it('0!=0 to be false', function () {
    expect(compare['!='](0, 0)).to.be.equal(false);
  });
  it('0!="0" to be false', function () {
    expect(compare['!='](0, '0')).to.be.equal(false);
  });
  it('0!=undefined to be true', function () {
    expect(compare['!='](0, undefined)).to.be.equal(true);
  });
  it('0!=false to be false', function () {
    expect(compare['!='](0, false)).to.be.equal(false);
  });
  it('0!=null to be true', function () {
    expect(compare['!='](0, null)).to.be.equal(true);
  });
  it('0!="" to be false', function () {
    expect(compare['!='](0, '')).to.be.equal(false);
  });
  it('0!=NaN to be true', function () {
    expect(compare['!='](0, NaN)).to.be.equal(true);
  });

});

describe('对比函数>=', function () {
  var undefined;
  // ==
  it('1>=1 to be true', function () {
    expect(compare['>='](1, 1)).to.be.equal(true);
  });
  it('1>=2 not to be false', function () {
    expect(compare['>='](1, 2)).to.be.equal(false);
  });
  it('1>="2" not to be false', function () {
    expect(compare['>='](1, "2")).to.be.equal(false);
  });
  it('2>="1" not to be true', function () {
    expect(compare['>=']("2", 1)).to.be.equal(true);
  });
  it('1>="1" to be true', function () {
    expect(compare['>='](1, '1')).to.be.equal(true);
  });
  it('0>=0 to be true', function () {
    expect(compare['>='](0, 0)).to.be.equal(true);
  });
  it('0>="0" to be true', function () {
    expect(compare['>='](0, '0')).to.be.equal(true);
  });
  it('0>="" to be true', function () {
    expect(compare['>='](0, '')).to.be.equal(true);
  });

  // undefined null false NaN 会转换为0
  it('0>=undefined to be true', function () {
    expect(compare['>='](0, undefined)).to.be.equal(true);
  });
  it('0>=false to be true', function () {
    expect(compare['>='](0, false)).to.be.equal(true);
  });
  it('0>=null to be true', function () {
    expect(compare['>='](0, null)).to.be.equal(true);
  });
  it('0>=NaN to be true', function () {
    expect(compare['>='](0, NaN)).to.be.equal(true);
  });

});

describe('对比函数>', function () {
  var undefined;
  // ==
  it('1>1 to be false', function () {
    expect(compare['>'](1, 1)).to.be.equal(false);
  });
  it('1>2 not to be false', function () {
    expect(compare['>'](1, 2)).to.be.equal(false);
  });
  it('1>"2" not to be false', function () {
    expect(compare['>'](1, "2")).to.be.equal(false);
  });
  it('2>"1" not to be true', function () {
    expect(compare['>']("2", 1)).to.be.equal(true);
  });
  it('1>"1" to be false', function () {
    expect(compare['>'](1, '1')).to.be.equal(false);
  });
  it('0>0 to be false', function () {
    expect(compare['>'](0, 0)).to.be.equal(false);
  });
  it('0>"0" to be false', function () {
    expect(compare['>'](0, '0')).to.be.equal(false);
  });
  it('0>"" to be false', function () {
    expect(compare['>'](0, '')).to.be.equal(false);
  });

  // undefined null false NaN 会转换为0
  it('0>undefined to be false', function () {
    expect(compare['>'](0, undefined)).to.be.equal(false);
  });
  it('0>false to be false', function () {
    expect(compare['>'](0, false)).to.be.equal(false);
  });
  it('0>null to be false', function () {
    expect(compare['>'](0, null)).to.be.equal(false);
  });
  it('0>NaN to be false', function () {
    expect(compare['>'](0, NaN)).to.be.equal(false);
  });

});

describe('对比函数<=', function () {
  var undefined;
  // ==
  it('1<=1 to be true', function () {
    expect(compare['<='](1, 1)).to.be.equal(true);
  });
  it('1<=2 not to be true', function () {
    expect(compare['<='](1, 2)).to.be.equal(true);
  });
  it('1<="2" not to be true', function () {
    expect(compare['<='](1, "2")).to.be.equal(true);
  });
  it('2<="1" not to be false', function () {
    expect(compare['<=']("2", 1)).to.be.equal(false);
  });
  it('1<="1" to be true', function () {
    expect(compare['<='](1, '1')).to.be.equal(true);
  });
  it('0<=0 to be true', function () {
    expect(compare['<='](0, 0)).to.be.equal(true);
  });
  it('0<="0" to be true', function () {
    expect(compare['<='](0, '0')).to.be.equal(true);
  });
  it('0<="" to be true', function () {
    expect(compare['<='](0, '')).to.be.equal(true);
  });

  // undefined null false NaN 会转换为0
  it('0<=undefined to be true', function () {
    expect(compare['<='](0, undefined)).to.be.equal(true);
  });
  it('0<=false to be true', function () {
    expect(compare['<='](0, false)).to.be.equal(true);
  });
  it('0<=null to be true', function () {
    expect(compare['<='](0, null)).to.be.equal(true);
  });
  it('0<=NaN to be true', function () {
    expect(compare['<='](0, NaN)).to.be.equal(true);
  });

});

describe('对比函数<', function () {
  var undefined;
  // ==
  it('1<1 to be false', function () {
    expect(compare['<'](1, 1)).to.be.equal(false);
  });
  it('1<2 not to be true', function () {
    expect(compare['<'](1, 2)).to.be.equal(true);
  });
  it('1<"2" not to be true', function () {
    expect(compare['<'](1, "2")).to.be.equal(true);
  });
  it('2<"1" not to be false', function () {
    expect(compare['<']("2", 1)).to.be.equal(false);
  });
  it('1<"1" to be false', function () {
    expect(compare['<'](1, '1')).to.be.equal(false);
  });
  it('0<0 to be false', function () {
    expect(compare['<'](0, 0)).to.be.equal(false);
  });
  it('0<"0" to be false', function () {
    expect(compare['<'](0, '0')).to.be.equal(false);
  });
  it('0<"" to be false', function () {
    expect(compare['<'](0, '')).to.be.equal(false);
  });

  // undefined null false NaN 会转换为0
  it('0<undefined to be false', function () {
    expect(compare['<'](0, undefined)).to.be.equal(false);
  });
  it('0<false to be false', function () {
    expect(compare['<'](0, false)).to.be.equal(false);
  });
  it('0<null to be false', function () {
    expect(compare['<'](0, null)).to.be.equal(false);
  });
  it('0<NaN to be false', function () {
    expect(compare['<'](0, NaN)).to.be.equal(false);
  });

});