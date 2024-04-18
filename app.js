// class A {
// 	constructor() {
// 		this.name = 'foo';
// 		this.getName();
// 	}

// 	getName() {
// 		console.log('foo' + this.name);
// 	}
// }

// class B extends A {

// 	constructor() {
// 		super();
// 		this.name = 'bar';
// 		this.getName();
// 	}

// 	getName() {
// 		super.getName();
// 		console.log('bar' + this.name);
// 	}
// }

// new B()


// -------> flatten

// Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.
// Для решения задачи нельзя использовать готовые методы для выравнивания массивов.
// Примеры
// const list = [1, 2, [3, 5], [[4, 3], 2]];
// flatten(list); // [1, 2, 3, 5, 4, 3, 2]
// Подсказки
// Array.isArray - проверяет, является ли элемент массивом.

// EX. 4
// DESCRIPTION: flat an array

// const flat = (arr) => {
//   // TODO: implement
// }

// console.log(flat([0, 1, [2, [3, [4, 5], 6], [7, 8]], 9]));
// expected result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// ---------------------------

// DESCRIPTION: Make expressions work
// RULE: do not change console.log 

// console.log((1).plus(2).minus(1) === 2); 
// expected result: true

// Array.prototype.repeater
// console.log([1,2,3,4,5].repeater(4)); 
// expected result: [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]

// ---------------------------

// EX. 5
// DESCRIPTION: makes items of an array unique

// const uniq = (arr) => {
// };

// console.log(uniq([ 1, 2, 45, 3, 2, 1, 3, 2, 1, 45, 5 ]));
//expected result: [ 1, 2, 45, 3, 5 ]

// ---------------------------

// Ex. 7
// DESCRIPTION: find pairs of numbers in an array
// RULE: no duplicates

// const getPairs = (arr, ref) => {
//   const newArr
// }

// console.log(getPairs([1, 0, 13, -4, 8, 12, -19, 5, 32], 13));
// expected result: [[1, 12], [0, 13], [8, 5], [-19, 32]]