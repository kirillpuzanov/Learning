console.log(' Good luck DeD!!!');


// это какой то gbpltw
// function* range(start, end) {
// 	for (let i = start; i <= end; i++) {
// 		yield Promise.resolve(i);
// 	}
// }

// (async () => {
// 	const gen = range(1, 3);
// 	for await (const item of gen) {
// 		console.log(item);
// 	}
// })();

/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/


// const time = (delay) => {
// 	let id = setTimeout(function tick(){
// 		console.log('tick');

// 		if(delay > 1000) {
// 			delay -= 1000
// 			console.log('-- decrease time ->', delay);
// 			id = setTimeout(tick, delay)
// 		} else {
// 			console.log('-- cancel timeOut -->');
// 			clearTimeout(id)
// 		}
// 	}, delay)

// }

// time(10000)   


class Animal {
	static bark() {
		console.log('-- bark  -->', );
	}
	hi() {
		console.log('--  hi -->' );
	}
	name = 'asdasd'
}

class Dog extends Animal {}

const dog = new Dog();

// console.log('--   -->', dog.__proto__.__proto__ === Animal.prototype);

const arr = [1,23,4,5]

console.log('--   -->',Math.max.apply(null, arr));

const sim = Symbol() // [object Symbol]
console.log(Object.prototype.toString.call(sim))