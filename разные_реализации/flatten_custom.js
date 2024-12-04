

// вернуть плоский массив с хер знает какой исходной вложенностью, без встроенного flat

const list = [1, 2, [3, 5], [[4, 3], 2]]

// -------- рекурсия 

function flatten(arr) {
	const res = [];
	const helper = (items) => {
		for(const item of items) {
			if(Array.isArray(item)) {
				helper(item)
			} else {
				res.push(item)
			}
		}
	}
	helper(arr);
	return res;
}



// -------- итеративный вариант 

function flatten2(arr) {

	const stack = arr
	const res = [];

	while(stack.length > 0) {
		const cur = stack.pop();

		if(Array.isArray(cur)) {
			stack.push(...cur)
		} else {
			res.push(cur)
		}
	}

	return res;
}
// console.log('--   -->', flatten2(list));