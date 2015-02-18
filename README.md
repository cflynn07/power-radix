power-radix
===========

Library for converting numbers from one radix representation (encoding) to another, with optional custom defined encodings. Inspired by rubyworks/radix.

Features
--------

 - Convert to and from any base.
 - Define custom encoding and character sets.

Usage
-----

Base conversions with ASCII ordered notations are easy in Javascript.
```
(255).toString(16) === 'ff'
parseInt('ff', 16) === 255
```

But JavaScript limits you to radix values 2 - 36.
```
(255).toString(37) // error
```

power-radix provides the means of converting to and from any base.  
For example, a number in base 256 can be representated by the array [100, 10] (Math.pow(100, 256) + Math.pow(10, 1)) and can be converted to base 10.
```
// as an array
[100, 10].base(256).toArray(10) #=> [2, 5, 6, 1, 0]

// or as a string (in base 2-62)
[100,10].base(256).toString(10) #=> "25610"
```

power-radix also supports custom character sets. You can specify an array of characters to use as symbols for a base.
```
var base = ['Q', 'W', 'E', 'R', 'T', 'Y', I', 'O', 'U];
'10'.base(10).toArray(base) #=> ['W', 'Q']
```

Installing
----------
```
$ npm install power-radix
```
