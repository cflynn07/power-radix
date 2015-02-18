/**
 * debug wrapper class for power-radix
 * @module lib/debug
 */
'use strict';

var DebugModule = require('debug');

/* constants */
var REGEX_FILE_NAME = /\/?([A-z0-9-_.]+)?\/([A-z0-9-_.]+)\.js$/;
var PREFIX = 'power-radix|';

/* Function returns new instance per invokation */
module.exports = function (fileName) {
  var fileNameTail = REGEX_FILE_NAME.exec(fileName)[0];
  // power-radix|/lib/ex.js
  return new DebugModule(PREFIX+fileNameTail);
};
