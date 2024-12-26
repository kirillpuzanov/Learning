const myPolyfills = require('./index')


describe('Test myPolyfills', () => {
  beforeEach(() => {
	myPolyfills()
  })

  describe('test map', () => {
	it('Check call without callback in args', () => {
	  const badFn = () => [1, 2, 3].myMap()
	  expect(badFn).toThrow(TypeError)
	})

	it('call from boolean', () => {
	  const badFn = () => true.myMap(el => el * 2)
	  expect(badFn).toThrow(TypeError)
	})

	it('compare with map', () => {
	  expect([1, 2, 3, 4, 5].myMap(el => el * 2)).toEqual([
		2, 4, 6, 8, 10,
	  ])
	})
  })

  describe('test my reduce', () => {
	it('check wrong type', () => {
	  function badFn() {
		Array.prototype.myReduce.call(true, (acc, val) => acc + val)
	  }

	  expect(badFn).toThrow(TypeError)
	})

	it('no callback', () => {
	  function badFn() {
		[1, 2, 3].myReduce()
	  }

	  expect(badFn).toThrow(TypeError)
	})

	it('sum elements', () => {
	  const arr = [1, 2, 3]
	  expect(arr.myReduce((acc, el) => acc + el)).toEqual(
		arr.reduce((acc, el) => acc + el)
	  )
	})

	it('check string', () => {
	  expect(
		Array.prototype.myReduce.call(
		  'test',
		  (acc, el) => {
			return acc + el
		  },
		  10
		)
	  ).toEqual(
		Array.prototype.reduce.call(
		  'test',
		  (acc, el) => {
			return acc + el
		  },
		  10
		)
	  )
	})
  })
})
