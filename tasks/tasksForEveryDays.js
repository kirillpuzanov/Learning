// 1 day
// Написать:
// 	- бин поиск
// 	- свой map
// 	- рекурсивный setTimeout

// 2 day
// Написать:
// 	- quick sort
// 	- свой reduce
// 	- кеширующую функцию

// 3 day
// Написать:
// 	- сортировка пузырьком
// 	- свой bind (ES5 + ES6)
// 	- свой debounce
// базовый обход дерева в глубину

// 4 day
// Написать:
// 	- сортировка выбором
// 	- аналог Promise All
// 	- custom flatten

//  5 day
// Написать:
// 	- фибоначи рекурсия + цикл
// 	- факториал рекурсия + цикл
//  - performance timeout

// свой Math.random / Math.floor / Math.ceil (заебка с последней 9 !!)

console.log(' Good luck DeD!!!')

// TODO ------ rec timeout]

// const recTime = (fn, repeat, delay) => {
// 	let callCount = 0;
// 	let timer = setTimeout(function tick() {
// 		callCount++
// 		fn(callCount)
// 		if(callCount < repeat) {
// 			timer = setTimeout(tick, delay)
// 		}
// 	}, delay)
// }

// recTime((arg) => console.log(`tick count ${arg} / call time - ${performance.now()}`), 4, 1000)

// TODO ------ debounce

// const debounce = (fn, delay) => {
// 	let timer = null
// 	return function(...args) {

// 		if(timer) {
// 			clearTimeout(timer)
// 		}
// 		timer = setTimeout(() => {
// 			fn(...args)
// 		}, delay)
// 	}
// }

// const ff = debounce(a => console.log('---', a), 0)

// ff(1)
// ff(2)
// ff(3)
// ff(4)
// ff(5)
// ff(6)

// TODO ------ throttle

// const throttle = (cb, delay) => {
// 	let timer = null

// 	return function(...args) {
// 		if(timer) {
// 			return
// 		}
// 		timer = setTimeout(() => {
// 			cb(...args)
// 			clearTimeout(timer)
// 			timer = null
// 		}, delay)
// 	}
// }

// const tt = throttle(a => console.log('---', a), 30)

// tt(1)
// tt(2)
// tt(3)
// tt(4)
// tt(5)
// tt(6)

// ------ carry
// типа однострочник ))
// const curry = fn =>
// 	function temp(...args) {
// 		return args.length >= fn.length ? fn(...args) : temp.bind(this, ...args)
// 	}

// const sum = (a, b, c) => {
// 	return a * b * c
// }

// function curry(fn) {
// 	return function temp(...args) {
// 		if(args.length >= fn.length) {
// 			return fn(...args)
// 		} else {
// 			return temp.bind(this, ...args)
// 			// return function(...newArgs) {
// 			// 	return temp.call(this, ...args.concat(...newArgs))
// 			// }
// 		}
// 	}
// }

// const curriedSum = curry(sum)

// console.log('--  curriedSum result 1 -->', curriedSum(1, 2)(1023))
// console.log('--  curriedSum result 2-->', curriedSum(1)(2)(5))
// console.log('--  curriedSum result 3-->', curriedSum(1, 2, 1023))

// ------ binSearch
// let array = [1, 2, 3, 5, 7, 7, 7, 7, 7, 89, 122, 131, 1003, 1077]

// const binarySearch = (arr, target) => {
// 	if(arr.length < 2) {
// 		return arr
// 	}

// 	let leftIdx = 0
// 	let rightIdx = arr.length - 1;

// 	while(leftIdx <= rightIdx) {
// 		const middleIdx = Math.floor((leftIdx + rightIdx) / 2)
// 		const curEl = arr[middleIdx]
// 		if(curEl === target) {
// 			return middleIdx
// 		}
// 		if(curEl > target) {
// 			rightIdx = middleIdx - 1
// 		} else {
// 			leftIdx = middleIdx + 1
// 		}
// 	}

// 	return 'not found'
// }
// console.log('--  binarySearch -->', binarySearch(array, 2));

// ------ my Promise all

// function promiseAll(arr) {
// 	const dict = {};

// 	return new Promise((resolve, reject) => {
// 		arr.forEach((pr, i) => {
// 			pr
// 			.then((result) => {
// 				dict[i] = result;
// 				const values = Object.values(dict)
// 				if(values.length === arr.length) {
// 					resolve(values)
// 				}
// 			})
// 			.catch((error) => {
// 				reject({status: 'rejected', reason: error})
// 			})
// 		})
// 	})
// }

// promiseAll([
// 	Promise.resolve(1),
// 	new Promise(res => setTimeout(() => res('new Promise after 2000'), 2000)),
// 	Promise.resolve(10),
// 	// new Promise((_, rej) => setTimeout(() => rej('new Promise reject'), 3000)),
// ])
// 	.then(res => console.log('--   -->', res))
// 	.catch(error => console.log('-- error  -->', error))

// ------ my map

// if (!Array.prototype.myMaps) {
// }

// console.log('--   -->', [1,2,3].myMaps());

// ----------- my reduce

// if(!Array.prototype.myReduce) {
// 	Array.prototype.myReduce = function (cb, initAcc) {

// 		if(!Array.isArray(this)) {
// 			throw new TypeError('entity must be Array')
// 		}
// 		let acc = arguments.length >= 2 ? initAcc : this[0]
// 		const firstIdx = arguments.length >= 2 ? 0 : 1

// 		for (let i = firstIdx; i < this.length; i++) {
// 			acc = cb(acc, this[i], i, this)
// 		}
// 		return acc
// 	}
// }
// console.log('-- red  -->', [1,2,3].myReduce((acc, el) => acc + el, ''));

// ------ my Flat

if (!Array.prototype.myFlat) {
	Array.prototype.myFlat = function (deep = Infinity) {
		// const result = []
		// let currDeppCount = 0
		// const helper = (tempArr) => {
		// 	for(let el of tempArr) {
		// 		if(!Array.isArray(el)) {
		// 			result.push(el)
		// 		} else {
		// 			if(++currDeppCount <= deep) {
		// 				helper(el)
		// 			} else {
		// 				result.push(el)
		// 				break
		// 			}
		// 		}
		// 	}
		// }
		// helper(this)
		// return result
		// --------
		// const res = []
		// let stack = this
		// let currDeppCount = 0
		// while(stack.length > 0) {
		// 	const el = stack.pop()
		// 	if(!Array.isArray(el)) {
		// 		res.push(el)
		// 	} else {
		// 		if(++currDeppCount <= deep) {
		// 			stack.push(...el)
		// 		} else {
		// 			res.push(el)
		// 		}
		// 	}
		// }
		// return res.toReversed()
	}
}
// console.log('--   -->',[1, 2, 3, [4,5, [6, [7,8, [9] ]]]].myFlat(3) );

// ------ quickSort

// let array2 = [3, 5, 7, 7, 131, 1003, 1077, 7, 1, 2, 3, 89, 122]

// const quickSort = arr => {}
// console.log('--   -->',quickSort(array2));

// EventEmitter
// class EventEmitter {}

// создать объект в котором, по ключу "before10" будут собраны в массив все названия городов, у которых price не более 10 условных единиц, в получившимся массиве убрать дубликаты названий, если они будут
//по ключу "after10" собраны все названия городов, у которых price больше или равен 10 условных единиц и expireDate не просрочено относительно сегодня.

//Названия городов в исходных массивах также должны быть приведены в читаемый вид (перевернуты) и массив отсортирован в порядке возрастания по читаемому названию

// const data = [
// 	{ title: 'накабА', price: '12.3', expireDate: '2024-07-17' },
// 	{ title: 'кижднелеГ', price: '10.0_1', expireDate: '2024-07-20' },
// 	{ title: 'ксйатаК', price: '18', expireDate: '2024-07-25' },
// 	{ title: 'ыцребюЛ', price: '7.3', expireDate: '2024-06-21' },
// 	{ title: 'ыцребюЛ', price: '7.9', expireDate: '2024-09-21' },
// 	{ title: 'sallaD', price: '9.99', expireDate: '2024-07-23' },
// 	{ title: 'hgrubsttiP', price: '15.6', expireDate: '2024-10-17' },
// 	{ title: 'nosidE', price: '5.4', expireDate: '2024-09-01' },
// ]

// const formattedData = arr => {
// 	return Object.groupBy(arr, ({ price }) => {
// 		return +price > 10 ? 'beforeTen' : 'afterTen'
// 	})
// }
// console.log('--   -->', formattedData(data))

// start  middle  1 end success

// timer1 promise1 timer2

const sum = (a, b) => {
	return a + b
}
