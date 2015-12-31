power-radix
===========
[![Build Status](https://travis-ci.org/cflynn07/power-radix.svg)](https://travis-ci.org/cflynn07/power-radix)
[![Code Climate](https://codeclimate.com/github/cflynn07/power-radix/badges/gpa.svg)](https://codeclimate.com/github/cflynn07/power-radix)
[![Test Coverage](https://codeclimate.com/github/cflynn07/power-radix/badges/coverage.svg)](https://codeclimate.com/github/cflynn07/power-radix)
[![Dependency Status](https://david-dm.org/cflynn07/power-radix.svg)](https://david-dm.org/cflynn07/power-radix)
[![devDependency Status](https://david-dm.org/cflynn07/power-radix/dev-status.svg)](https://david-dm.org/cflynn07/power-radix#info=devDependencies)

[![NPM](https://nodei.co/npm/power-radix.png?compact=true)](https://nodei.co/npm/power-radix/)  

Library for converting numbers from one radix representation (encoding) to another, with optional
custom defined encodings. Inspired by rubyworks/radix.

[power-radix-encodings](https://www.npmjs.com/package/power-radix-encodings) is a useful collection
of common encodings that are independently requireable.

Features
--------

 - Convert to and from any base.
 - Define custom encoding and character sets.

Installing
----------
```
$ npm install power-radix
```

Usage
-----

Base conversions with ASCII ordered notations are easy in Javascript.
```js
(255).toString(16) === 'ff'
parseInt('ff', 16) === 255
```

But JavaScript limits you to radix values 2 - 36.
```js
(255).toString(37) // error
```

power-radix provides the means of converting to and from any base.  
For example, a number in base 256 can be representated by the array [100, 10] (Math.pow(100, 256) +
Math.pow(10, 1)) and can be converted to base 10.
```js
// as an array
new PowerRadix([100, 10], 256).toArray(10); // ['2', '5', '6', '1', '0']

// or as a string
new PowerRadix([100, 10], 256).toString(10); // "25610"
```

power-radix also supports custom character encodings as base and targed radixes. By default,
power-radix uses the following character encoding:  
`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`

You can optionally specify an array of characters to use as symbols for a radix to give your output
a custom encoding.
```js
var base = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
new PowerRadix([1, 0], 10).toArray(base); // ['W', 'Q']
new PowerRadix('10', 10).toArray(base);   // ['W', 'Q']
new PowerRadix(10, 10).toArray(base);     // ['W', 'Q']

new PowerRadix([1, 0], 10).toString(base); // "WQ"
new PowerRadix('10', 10).toString(base);   // "WQ"
new PowerRadix(10, 10).toString(base);     // "WQ"
```

Or specify an array of characters to use as symbols for the base radix
```js
var base = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
var stdBase10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
new PowerRadix(['W', 'Q'], base).toArray(stdBase10);   // [1, 0]
new PowerRadix(['W', 'Q'], base.join('')).toArray(10); // [1, 0]
new PowerRadix(['W', 'Q'].join(''), base).toArray(stdBase10);   // [1, 0]
new PowerRadix(['W', 'Q'].join(''), base.join('')).toArray(10); // [1, 0]

new PowerRadix(['W', 'Q'], base).toString(stdBase10);   // "10"
new PowerRadix(['W', 'Q'], base.join('')).toString(10); // "10"
new PowerRadix(['W', 'Q'].join(), base).toString(stdBase10);   // "10"
new PowerRadix(['W', 'Q'].join(), base.join('')).toString(10); // "10"
```

Examples
--------
```js
// Node.js standard library crypto module
var crypto = require('crypto');

// Produce a SHA1 hash digest. SHA1 digests are 160 bits (20 bytes).
var sha1HashDigest = crypto.createHash('sha1').update('').digest('hex');
// "da39a3ee5e6b4b0d3255bfef95601890afd80709"

// When represented in radix 2 (binary), the representation is 160 characters in length
new PowerRadix(sha1HashDigest, require('power-radix-encodings/base16-hexadecimal-lowercase'))
  .toString(require('power-radix-encodings/base2-binary'));
// "1101101000111001101000111110111001011110011010110100101100001101001100100101010110111111111011111001010101100000000110001001000010101111110110000000011100001001"

// When represented in radix 10 (decimal), the representation is 49 (varies) characters in length
new PowerRadix(sha1HashDigest, require('power-radix-encodings/base16-hexadecimal-lowercase'))
  .toString(require('power-radix-encodings/base10-decimal'));
// "1245845410931227995499360226027473197403882391305"

// When represented in radix 16 (hexadecimal), the representation is 40 characters in length
new PowerRadix(sha1HashDigest, require('power-radix-encodings/base16-hexadecimal-lowercase'))
  .toString(require('power-radix-encodings/base16-hexadecimal-lowercase'));
// "da39a3ee5e6b4b0d3255bfef95601890afd80709"

var radix255CharacterEncoding = [];
for(var i = 0; i < 256; i++) { radix255CharacterEncoding.push(i+''); }

// When represented in radix 255, the representation is 20 characters in length (note:
// "characters" are actually decimal characters concatenated together)

new PowerRadix(sha1HashDigest, require('power-radix-encodings/base16-hexadecimal-lowercase'))
  .toString(radix255CharacterEncoding);
// The decimal value of each of the 20 bytes of the sha1 hash digest
//  ['218', '57', '163', '238', '94', '107', '75', '13', '50', '85', '191', '239', '149', '96', '24', '144', '175', '216', '7', '9']

var radix255BinaryCharacterEncoding = [];
for(var i = 0; i < 256; i++) { radix255BinaryCharacterEncoding.push(new PowerRadix(i, 10).toString(2)); }
new PowerRadix(sha1HashDigest, require('power-radix-encodings/base16-hexadecimal-lowercase'))
  .toString(radix255BinaryCharacterEncoding);
// The binary representations of each of the 20 bytes of the sha1 hash digest (note: each byte representation doesn't have padding leading zeros)
// ['11011010', '111001', '10100011', '11101110', '1011110', '1101011', '1001011', '1101', '110010', '1010101', '10111111', '11101111', '10010101', '1100000', '11000', '10010000', '10101111', '11011000', '111', '1001']
```

Testing
-------
```
// Tests + coverage reports are run using Lab
$ npm test
// Test coverage reports
npm run test-cov # will auto-open Google Chrome with html coverage report
```

License
-------
[MIT](https://raw.githubusercontent.com/cflynn07/power-radix/master/LICENSE)
