/**
 * Main module
 * @module power-radix
 */
'use strict';

/* Constructor */
module.exports = PowerRadix;

/* Constants */
var DEFAULT_CHARACTER_SET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

/**
 * Class encapsulating radix conversion operations
 * @class
 * @param {number|string|array} number
 * @param {number} radix
 * @return this
 */
function PowerRadix (number, radix) {
  this.number = number;
  this.radix = radix;
  return this;
}

/**
 * Output array representation of number converted to outputRadix
 * @param {number} outputRadix
 * @return this
 */
PowerRadix.prototype.toArray = function (outputRadix) {
  return [];
};

/**
 * Output string representation of number converted to outputRadix
 * @param {number} outputRadix
 * @return this
 */
PowerRadix.prototype.toString = function (outputRadix) {
  return '';
};
