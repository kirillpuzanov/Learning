// ----- РЕКУРСИВНЫЙ SET_TIMEOUT -------

/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/


const time = (delay) => {
	let id = setTimeout(function tick(){
		console.log('tick');

		if(delay > 1000) {
			delay -= 1000
			id = setTimeout(tick, delay)
		} else {
			clearTimeout(id)
		}
	}, delay)

}

time(10000) 