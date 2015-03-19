power-radix
===========
[![Build Status](https://travis-ci.org/cflynn07/power-radix.svg)](https://travis-ci.org/cflynn07/power-radix)
[![Dependency Status](https://david-dm.org/cflynn07/power-radix.svg)](https://david-dm.org/cflynn07/power-radix)
[![devDependency Status](https://david-dm.org/cflynn07/power-radix/dev-status.svg)](https://david-dm.org/cflynn07/power-radix#info=devDependencies)

[![NPM](https://nodei.co/npm/power-radix.png?compact=true)](https://nodei.co/npm/power-radix/)  

Library for converting numbers from one radix representation (encoding) to another, with optional custom defined encodings. Inspired by rubyworks/radix.

Features
--------

 - Convert to and from any base.
 - Define custom encoding and character sets.

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
For example, a number in base 256 can be representated by the array [100, 10] (Math.pow(100, 256) + Math.pow(10, 1)) and can be converted to base 10.
```js
// as an array
new PowerRadix([100, 10], 256).toArray(10); // ['2', '5', '6', '1', '0']

// or as a string
new PowerRadix([100, 10], 256).toString(10); // "25610"
```

power-radix also supports custom character encodings. By default, power-radix uses the following character encoding:  
`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`

You can optionally specify an array of characters to use as symbols for a radix to give your output a custom encoding.
```js
var base = ['Q', 'W', 'E', 'R', 'T', 'Y', I', 'O', 'U'];
new PowerRadix([1, 0], base).toArray();  // ['W', 'Q']
new PowerRadix([1, 0], base).toString(); // "WQ"
```

Installing
----------
```
$ npm install power-radix
```

Testing
-------
```
// Tests + coverage reports are run using Lab
$ npm test
```

License
-------
[MIT](https://raw.githubusercontent.com/cflynn07/power-radix/master/LICENSE)
