// --------- быстрая сортировка ( сортировка Хоара )  quickSort ---------
let array2 = [3,5,7,7,131,1003,1077, 7,1,2,3,89,122]

const quickSort = (arr) => {
	const arrLen = arr.length;
	if(arrLen <= 1) return arr;

	const pivotIndex = Math.floor(arrLen / 2);
	const pivotElement = arr[pivotIndex];

	const less = [];
	const grater = [];

	for(let i = 0; i < arrLen; i++) {
		if(i === pivotIndex) {
			continue;
		}
		if(arr[i] < pivotElement) {
			less.push(arr[i])
		} else {
			grater.push(arr[i])
		}
	}

	return [...quickSort(less), pivotElement, ...quickSort(grater)]
}
// console.log('--   -->',quickSort(array2));