/**
 * Example, generate a bitcoin address and encode it in base58
 *
 * INSTRUCTIONS:
 * - npm install ecurve
 * - 
 */
'use strict';

var base16Encoding = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f'
];

var crypto = require('crypto');
var ecurve = require('ecurve');
var PowerRadix = require('../lib/index');

var ecparams = ecurve.getCurveByName('secp256k1');
var shasum = crypto.createHash('sha256');

// Generate a random, new private key
shasum.update(Math.random()+'');

// digest accepts 'hex', 'binary', or 'base64'
var privateKey = shasum.digest('hex');

// just for fun lets convert privateKey from base16 to base 2 and log
console.log('privateKey', privateKey);
var powerRadix = new PowerRadix(privateKey, base16Encoding);
var privateKeyBase2 = powerRadix.toArray([0, 1]);
console.log('privateKeyBase2', privateKeyBase2);
