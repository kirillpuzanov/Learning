console.log(' Good luck DeD!!!');


// console.log('-- "" -->', performance.now());


customTimeOut(() => console.log(performance.now()) , 1000, 4);

function customTimeOut(fn, delay, count) {
	let counter = 0;
	let id = setTimeout(function tick() {
		counter++;
		fn();

		if(counter < count) {
			id = setTimeout(tick, delay)
		} else {
			clearTimeout(id)
		}
	}, delay)
}