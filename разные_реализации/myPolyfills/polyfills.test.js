const expect = require('chai').expect;

const myPolyfills = require('./index');

describe('Test myPolyfills', () => {
  before(() => {
    myPolyfills();
  })

  describe('test map', () => {

    it('Check call without callback in args', () => {
      const badFn = () => [1, 2, 3].myMap();
      expect(badFn).to.throw(TypeError);
    });

    it('call from boolean', () => {
      const badFn = () => true.myMap((el) => el * 2);
      expect(badFn).to.throw(TypeError);
    })

    it('compare with map', () => {
      expect([1, 2, 3, 4, 5].myMap((el) => el * 2)).to.deep
        .equal([2, 4, 6, 8, 10]);
    })

  })


})
