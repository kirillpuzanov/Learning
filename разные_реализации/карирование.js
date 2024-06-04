const sum = (a, b, c) => {
	return a * b * c
}

function curry(fn) {
	return function temp(...args) {
		if(args.length >= fn.length) {
			return fn(...args)
		} 

		// короткий аналог
		// return temp.bind(this, ...args)
		
		return function(...newArgs) {
			return temp.apply(this, args.concat(newArgs))
		}
	}
}

const curriedSum = curry(sum)

console.log('--  curriedSum result 1 -->', curriedSum(1, 2)(1023))
console.log('--  curriedSum result 2-->', curriedSum(1)(2)(5))
console.log('--  curriedSum result 3-->', curriedSum(1, 2, 1023))
