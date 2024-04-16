// -------  простой debounce --------

function fetching(param) {
	console.log(`fetching - ${param}, Hi - ${this.name}`);
}	

const user = {
	name: 'Bob'
}

function debounce (cb, delay) {
	let timer;

	return function(...args) {
		if(timer){
			clearTimeout(timer)
		}

		timer = setTimeout(() => {
			cb(args)
		}, delay)
	}
}

const ff = debounce(fetching.bind(user), 300);

ff(1)
ff(2)
ff(3)
ff(4)
ff(5)
ff(6)
