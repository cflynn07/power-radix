'use strict';

var PowerRadix = require('index');
var debug = require('lib/debug')(__filename);

var BASE_64_CHARACTER_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

describe('invalid uses', function () {
});

describe('edge cases', function () {
  it('should handle empty string argument gracefully', function () {
    var powerRadix;
    for (var i=2; i<256; i++) {
      powerRadix = new PowerRadix('', i);
      expect(powerRadix).toBeTruthy();
      for (var k=2; k<256; k++) {
        expect(powerRadix.toArray(k)).toEqual(['']);
        expect(powerRadix.toString(k)).toEqual('');
      }
    }
  });

  it('should handle empty array argument gracefully', function () {
    var powerRadix;
    for (var i=2; i<256; i++) {
      powerRadix = new PowerRadix([], i);
      expect(powerRadix).toBeTruthy();
      for (var k=2; k<256; k++) {
        expect(powerRadix.toArray(k)).toEqual(['']);
        expect(powerRadix.toString(k)).toEqual('');
      }
    }
  });

  it('should throw an exception for invalid radix argument', function () {
    expect(new PowerRadix(0, 0)).toThrow();
    expect(new PowerRadix(0, 1)).toThrow();
    expect(new PowerRadix(0, -1)).toThrow();
  });
});

describe('conversions', function () {
  it('should output value equal to constructor input if output radix '+
     'equals input radix', function () {
    for (var i=0; i<BASE_64_CHARACTER_SET.length; i++) {
      for (var k=2; k<BASE_64_CHARACTER_SET.length; k++) {
        expect(new PowerRadix(k, i).toArray(i)).toEqual();
        expect(new PowerRadix(k, i).toString(i)).toEqual();
      }
    }
    expect(true).toBe(true);
  });
});
