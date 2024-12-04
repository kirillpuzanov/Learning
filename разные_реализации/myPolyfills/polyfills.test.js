const expect = require('chai').expect

const myPolyfills = require('./index')

describe('Test myPolyfills', () => {
	before(() => {
		myPolyfills()
	})

	describe('test map', () => {
		it('Check call without callback in args', () => {
			const badFn = () => [1, 2, 3].myMap()
			expect(badFn).to.throw(TypeError)
		})

		it('call from boolean', () => {
			const badFn = () => true.myMap(el => el * 2)
			expect(badFn).to.throw(TypeError)
		})

		it('compare with map', () => {
			expect([1, 2, 3, 4, 5].myMap(el => el * 2)).to.deep.equal([
				2, 4, 6, 8, 10,
			])
		})
	})

	describe('test my reduce', () => {
		it('check wrong type', () => {
			function badFn() {
				Array.prototype.myReduce.call(true, (acc, val) => acc + val)
			}
			expect(badFn).to.throw(TypeError)
		})

		it('no callback', () => {
			function badFn() {
				;[1, 2, 3].myReduce()
			}
			expect(badFn).to.throw(TypeError)
		})

		it('sum elements', () => {
			const arr = [1, 2, 3]
			expect(arr.myReduce((acc, el) => acc + el)).to.equal(
				arr.reduce((acc, el) => acc + el)
			)
		})

		it('check string', () => {
			expect(
				Array.prototype.myReduce.call(
					'test',
					(acc, el, i) => {
						console.log('-- item  -->', acc + el)
						return acc + el
					},
					10
				)
			).to.deep.equal(
				Array.prototype.reduce.call(
					'test',
					(acc, el, i) => {
						return acc + el
					},
					10
				)
			)
		})

	})


})
