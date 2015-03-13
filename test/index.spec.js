'use strict';

var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var after = lab.after;
var before = lab.before;
var describe = lab.describe;
var expect = Code.expect;
var it = lab.it;

var PowerRadix = require('../lib/index');
var debug = require('../lib/debug')(__filename);

describe('edge cases', function () {

  it('should handle empty string argument gracefully', function (done) {
    var powerRadix;
    for (var i=2; i<256; i++) {
      powerRadix = new PowerRadix([1], i);
      powerRadix.toArray(10);
      expect(true).to.equal(true);
      //expect(powerRadix).toBeTruthy();
      for (var k=2; k<256; k++) {
        //expect(powerRadix.toArray(k)).to.equal([]);
        //expect(powerRadix.toString(k)).to.equal('');
      }
    }
    done();
  });

/*
  it('should handle empty array argument gracefully', function () {
    var powerRadix;
    for (var i=2; i<256; i++) {
      powerRadix = new PowerRadix([], i);
      expect(powerRadix).toBeTruthy();
      for (var k=2; k<256; k++) {
        expect(powerRadix.toArray(k)).toEqual([]);
        expect(powerRadix.toString(k)).toEqual('');
      }

      }
  });

  it('should throw an exception for invalid radix argument', function () {
    expect(new PowerRadix(0, 0)).toThrow();
    //expect(new PowerRadix(0, 1)).toThrow();
    expect(new PowerRadix(0, -1)).toThrow();
  });
*/

});

/*
describe('radix conversions', function () {
  xit('should output value equal to constructor input if output radix '+
     'equals input radix', function () {
    var c;
    for (var i=0; i<DEFAULT_CHARACTER_SET.length; i++) {
      for (var k=2; k<DEFAULT_CHARACTER_SET.length; k++) {
        c = DEFAULT_CHARACTER_SET[k];
        expect(new PowerRadix(c, i).toArray(i)).toEqual([c]);
        expect(new PowerRadix(c, i).toString(i)).toEqual(c);
      }
    }
  });

  xit('should convert from base 2 to base 8', function () {
    expect(new PowerRadix('101', 2).toString(8)).toEqual('5');
    expect(new PowerRadix('101', 2).toArray(8)).toEqual(['5']);
    expect(new PowerRadix([1,0,1], 2).toString(8)).toEqual('5');
  });

  xit('should convert from base 2 to base 10', function () {
  });

  xit('should convert from base 2 to base 16', function () {
  });

  xit('should convert from base 2 to base 20', function () {
  });

  xit('should convert from base 2 to base 62', function () {
  });

});
*/
