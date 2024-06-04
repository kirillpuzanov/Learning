//  ----------------------- типа кэш с хитрым вызовом


function memo(f) {
	// arguments.callee.cache = {};
	// const cache =	arguments.callee.cache;
	const cache =	{};
	// console.log('--  arguments.callee -->',caller);
	fun.cache = cache;
	function fun (...args) {
		const key = args.join(',');

		if(key in cache) {
			console.log('--  from cache -->',cache );
			return cache[key]
		} else {
			const res = f(...args);
			cache[key] = res;
			console.log('--cache-->',cache );
			return res
		}
	}

	return fun
}

const sum = memo((a, b) => a + b);

const sum2 = memo((a, b) => a + b);

console.log('sum 1 call', sum(1, 2)); 
console.log('sum 1 call', sum(1, 2)); 
console.log('sum 1 call', sum(2, 3)); 


console.log('sum 2 call', sum2(3, 4)); 
console.log('sum 2 call', sum2(10, 7)); 

console.log('--  sum1.cache -->', sum.cache);
console.log('--  sum2.cache -->', sum2.cache);