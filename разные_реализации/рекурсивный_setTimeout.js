// ----- РЕКУРСИВНЫЙ SET_TIMEOUT -------

/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/


const time = (delay) => {
	let id = setTimeout(function tick(){
		console.log('tick');

		if(delay > 1000) {
			delay -= 1000
			console.log('-- decrease time ->', delay);
			id = setTimeout(tick, delay)
		} else {
			console.log('-- cancel timeOut -->');
			clearTimeout(id)
		}
	}, delay)

}

time(10000) 