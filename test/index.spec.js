'use strict'

const expect = require('expect.js')

const PowerRadix = require('../lib/index')
const encodings = require('./fixtures/encodings')

describe('PowerRadix', function () {
  it('should throw an exception when passed invalid arguments', function () {
    const powerRadix = new PowerRadix(['F', 'F'], ['A', 'B'])
    const throws = function () {
      powerRadix.toString(10)
    }
    expect(throws).to.throwException(function (e) {
      expect(e.message).to.equal('invalid target: F not found in target encoding')
    })
  })

  it('should handle empty argument', function (done) {
    let powerRadix
    powerRadix = new PowerRadix([], 10)
    expect(powerRadix).to.be.ok()
    expect(powerRadix.toArray(10)).to.eql(['0'])
    expect(powerRadix.toString(10)).to.equal('0')

    powerRadix = new PowerRadix('', 10)
    expect(powerRadix).to.be.ok()
    expect(powerRadix.toArray(10)).to.eql(['0'])
    expect(powerRadix.toString(10)).to.equal('0')

    powerRadix = new PowerRadix(0, 10)
    expect(powerRadix).to.be.ok()
    expect(powerRadix.toArray(10)).to.eql(['0'])
    expect(powerRadix.toString(10)).to.equal('0')
    done()
  })

  it('should convert [0..9] from radix n[2..62] to radix n[n+1..62] ' +
     'using default character set', function () {
    this.timeout(10000)
    let powerRadix
    for (let j = 0; j < 10; j++) {
      for (let i = j + 2; i < 62; i++) {
        powerRadix = new PowerRadix([j], i)
        expect(powerRadix).to.be.ok()
        var res
        for (let k = i; k < 62; k++) {
          res = powerRadix.toArray(k)
          expect(res).to.eql([j + ''])
          res = powerRadix.toString(k)
          expect(res).to.equal(j + '')
        }
      }
    }
  })

  it('should convert from base 2 to base 8', function (done) {
    let powerRadix;
    [
      ['0', ['0'], ['A']],
      ['1', ['1'], ['B']],
      ['10', ['2'], ['C']],
      ['11', ['3'], ['D']],
      ['100', ['4'], ['E']],
      ['101', ['5'], ['F']],
      ['110', ['6'], ['G']],
      ['111', ['7'], ['H']],
      ['1000', ['1', '0'], ['B', 'A']],
      ['1001', ['1', '1'], ['B', 'B']],
      ['1010', ['1', '2'], ['B', 'C']],
      ['1011', ['1', '3'], ['B', 'D']],
      ['1100', ['1', '4'], ['B', 'E']],
      ['1101', ['1', '5'], ['B', 'F']],
      ['1110', ['1', '6'], ['B', 'G']],
      ['1111', ['1', '7'], ['B', 'H']]
    ].forEach(function (conversionPairs) {
      powerRadix = new PowerRadix(conversionPairs[0].split(''), 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(8)).to.eql(conversionPairs[1])
      expect(powerRadix.toString(8)).to.equal(conversionPairs[1].join(''))

      powerRadix = new PowerRadix(conversionPairs[0], 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(8)).to.eql(conversionPairs[1])
      expect(powerRadix.toString(8)).to.equal(conversionPairs[1].join(''))

      powerRadix = new PowerRadix(conversionPairs[0], 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(encodings.base8)).to.eql(conversionPairs[1])
      expect(powerRadix.toString(encodings.base8)).to.equal(conversionPairs[1].join(''))

      powerRadix = new PowerRadix(conversionPairs[0], 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(encodings.base8A)).to.eql(conversionPairs[2])
      expect(powerRadix.toString(encodings.base8A)).to.equal(conversionPairs[2].join(''))
    })
    done()
  })

  it('should convert from base 2 to base 10', function (done) {
    let powerRadix;
    [
      ['0', ['0'], ['A']],
      ['1', ['1'], ['B']],
      ['10', ['2'], ['C']],
      ['11', ['3'], ['D']],
      ['100', ['4'], ['E']],
      ['101', ['5'], ['F']],
      ['110', ['6'], ['G']],
      ['111', ['7'], ['H']],
      ['1000', ['8'], ['I']],
      ['1001', ['9'], ['J']],
      ['1010', ['1', '0'], ['B', 'A']],
      ['1011', ['1', '1'], ['B', 'B']],
      ['1100', ['1', '2'], ['B', 'C']],
      ['1101', ['1', '3'], ['B', 'D']],
      ['1110', ['1', '4'], ['B', 'E']],
      ['1111', ['1', '5'], ['B', 'F']]
    ].forEach(function (conversionPairs) {
      powerRadix = new PowerRadix(conversionPairs[0].split(''), 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(10)).to.eql(conversionPairs[1])
      expect(powerRadix.toString(10)).to.equal(conversionPairs[1].join(''))

      powerRadix = new PowerRadix(conversionPairs[0], 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(10)).to.eql(conversionPairs[1])
      expect(powerRadix.toString(10)).to.equal(conversionPairs[1].join(''))

      powerRadix = new PowerRadix(conversionPairs[0], 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(encodings.base10)).to.eql(conversionPairs[1])
      expect(powerRadix.toString(encodings.base10)).to.equal(conversionPairs[1].join(''))

      powerRadix = new PowerRadix(conversionPairs[0], 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(encodings.base10A)).to.eql(conversionPairs[2])
      expect(powerRadix.toString(encodings.base10A)).to.equal(conversionPairs[2].join(''))
    })
    done()
  })

  it('should convert from base 2 to base 16', function (done) {
    let powerRadix;
    [
      ['0', ['0'], ['A']],
      ['1', ['1'], ['B']],
      ['10', ['2'], ['C']],
      ['11', ['3'], ['D']],
      ['100', ['4'], ['E']],
      ['101', ['5'], ['F']],
      ['110', ['6'], ['G']],
      ['111', ['7'], ['H']],
      ['1000', ['8'], ['I']],
      ['1001', ['9'], ['J']],
      ['1010', ['A'], ['K']],
      ['1011', ['B'], ['L']],
      ['1100', ['C'], ['M']],
      ['1101', ['D'], ['N']],
      ['1110', ['E'], ['O']],
      ['1111', ['F'], ['P']]
    ].forEach(function (conversionPairs) {
      powerRadix = new PowerRadix(conversionPairs[0].split(''), 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(16)).to.eql(conversionPairs[1])
      expect(powerRadix.toString(16)).to.equal(conversionPairs[1].join(''))

      powerRadix = new PowerRadix(conversionPairs[0], 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(16)).to.eql(conversionPairs[1])
      expect(powerRadix.toString(16)).to.equal(conversionPairs[1].join(''))

      powerRadix = new PowerRadix(conversionPairs[0], 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(encodings.base16)).to.eql(conversionPairs[1])
      expect(powerRadix.toString(encodings.base16)).to.equal(conversionPairs[1].join(''))

      powerRadix = new PowerRadix(conversionPairs[0], 2)
      expect(powerRadix).to.be.ok()
      expect(powerRadix.toArray(encodings.base16A)).to.eql(conversionPairs[2])
      expect(powerRadix.toString(encodings.base16A)).to.equal(conversionPairs[2].join(''))
    })
    done()
  })

  // http://stackoverflow.com/questions/26083943/converting-a-large-base-62-value-to-base-16-with-javascript/33072743#33072743
  it('should convert from base 62 to base 16', function (done) {
    const base16Encoding = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    // happens to be identical to default encoding used by PowerRadix
    const base62Encoding = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    const base62Val = '4u8LPK581OHn7kRqRqP9ks'
    const expectedBase16ConvertedVal = 'A12D08BC6D93BC4E8EA847434C960416'
    const powerRadix = new PowerRadix(base62Val, base62Encoding)
    expect(powerRadix.toString(base16Encoding)).to.equal(expectedBase16ConvertedVal)
    done()
  })

  /*
  it('should convert from base 2 to base 20', function (done) {
  });

  it('should convert from base 2 to base 62', function (done) {
  });
  */
})
