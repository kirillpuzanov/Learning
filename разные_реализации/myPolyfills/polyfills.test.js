const expect = require('chai').expect;

const myPolyfills = require('./polyfills');

describe('Test myPolyfills', () => {
  before(() => {
    myPolyfills();
  })

  describe('test map', () => {

    it('Check callback in args', () => {
        const badFn = () => [1,2,3].myMap();
        expect(badFn).to.throw(TypeError);
    })

  })


})
