// задача написать функцию customTimeOut, которая
// через delay, "repeat" количество раз  вызовет переданную в нее функцию
// (в данном случае - performance.now() - время со старта функции)

// Рекурсивный "вложенный setTimeout"

// customTimeOut(() => console.log(performance.now()) , 1000, 4);
// 1105.8999999994412
// 2105.5999999996275
// 3107.699999999255
// 4108.0999999996275

function customTimeOut(fn, delay, repeat) {
	let count = 0
	let timer = setTimeout(function tick() {
		fn()
		count++
		if (count < repeat) {
			timer = setTimeout(tick, delay)
		} else {
			clearTimeout(timer)
		}
	}, delay)
}

// setInterval

// customTimeOut2(() => console.log(performance.now()) , 1000, 4);
// 1108
// 2110
// 3110
// 4109

function customTimeOut2(fn, delay, repeat) {
	let count = 0
	const id = setInterval(() => {
		count++
		fn()
		if (count >= repeat) {
			clearInterval(id)
		}
	}, delay)
}

// запускать в цикле setTimeout но с увеличенной задержкой

function customTimeOut3(fn, delay, repeat) {
	for (let i = 0; i < repeat; i++) {
		setTimeout(fn, delay + i * delay)
	}
}

// customTimeOut3(() => console.log(performance.now()) , 1000, 4);
