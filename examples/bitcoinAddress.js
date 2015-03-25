/**
 * Example, generate a bitcoin address and encode it in base58
 *
 * INSTRUCTIONS:
 * - npm install ecurve
 * - 
 */
'use strict';

var base16Encoding = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'a', 'b', 'c', 'd', 'e', 'f'
];

//var PowerRadix = require('../lib/index');
var Table = require('cli-table');
var crypto = require('crypto');
var ecurve = require('ecurve');
var BigInt = require('bigi');

var table = new Table();

/**
 * Create private key
 */
var privateKey = crypto.createHash('sha256')
  .update(Math.random()+'')
  .digest('hex');

var ecparams = ecurve.getCurveByName('secp256k1');
// using eliptic-curve arithmetic, multiply private key against
// the gernator-point on the eliptic curve to get the point on the
// curve that will correlate to a public-key
var ECPoint = ecparams.G.multiply(BigInt.fromHex(privateKey));
var x = ECPoint.affineX.toBuffer(32);
var y = ECPoint.affineY.toBuffer(32);

// previx point on curve with version byte (4)
var prefixedCurvePoint = Buffer.concat(new Buffer([0x04], x, y));
// NOTE: will create example explaining compressed public key


table.push([
  'private key (hex)', privateKey
]);

console.log(table.toString());
