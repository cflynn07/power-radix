/**
 * Convert number from source radix to target radix using
 * expansion method.
 *
 * http://www.deimel.org/comp_sci/conversion.htm
 *
 * @module lib/index
 */
'use strict';

module.exports = PowerRadix;

/**
 * Default radix encoding
 */
var B62 = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

/**
 * Creates a new instance of PowerRadix
 * @class
 * @throws {InvalidArgumentException}
 * @param {Array|String} digits
 * @param {Array|Number} sourceRadix
 */
function PowerRadix (digits, sourceRadix) {
  this._digits = digits;
  this._sourceRadix = sourceRadix;
}

/**
 * Convert to target radix, return as Array
 *
 * @param {Array} targetRadix - target radix / encoding characters
 * @return {Array} - source digits converted to target
 * radix presented in format of Array
 *
 * @param {Number} targetRadix - target radix
 * @return {Array} - source digits converted to target
 * radix presented in format of Array
 */
PowerRadix.prototype.toArray = function (targetRadix) {
  return convertBase.call(this, this._digits, B62, this._sourceRadix, targetRadix);
};

/**
 * Convert to target radix, return as String
 *
 * @param {Array} targetRadix - target radix / encoding characters
 * @return {Array} - source digits converted to target
 * radix presented in format of Array
 *
 * @param {Number} targetRadix - target radix
 * @return {Array} - source digits converted to target
 * radix presented in format of Array*
 */
PowerRadix.prototype.toString = function (targetRadix) {
  return convertBase.call(this, this._digits, B62, this._sourceRadix, targetRadix).join('');
};

/**
 * @param {Array} digits - digits of number to be converted
 * @param {Array} encoding - character encoding for targetRadix output
 * @param {Number} sourceRadix - radix to convert from
 * @param {Number} targetRadix - radix to convert to
 * @return {Array} digits converted from sourceRadix to targetRadix
 */
function convertBase (digits, encoding, sourceRadix, targetRadix) {
  // TODO: use bigint
  var bignum = 0;
  digits.forEach(function (digit) {
    bignum = bignum * sourceRadix + digit;
  });
  var converted = [];
  while (bignum !== 0) {
    converted.unshift(encoding[bignum % targetRadix]);
    bignum = bignum / targetRadix | 0;
  }
  return converted;
}
