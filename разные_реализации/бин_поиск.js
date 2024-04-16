
// ------  бин поиск !! классика ---------

let array = [1,2,3,5,7,7,7,7, 7,89,122,131,1003,1077]

const binarySearch = (arr, target) => {
	let lI = 0;
	let rI = arr.length - 1;

	while(lI <= rI) {
		// console.log('-- lI  -->', lI, 'rI', rI );
		const midI = Math.floor((lI +rI) / 2);

		if(arr[midI] === target) {
			return midI;
		}

		if(arr[midI] < target) {
			lI = midI + 1;
		} else {
			rI = midI - 1;
		}
	}

	return 'target index not found!'
}

console.log('--  binarySearch -->', binarySearch(array, 2000));





// --------- бин поиск !! рекурсия С БАЗОВЫМ СЛУЧАЕМ !!!! -------- 
 
function binarySearchRecursion (arr, target, leftIndex, rightIndex) {

	const start = leftIndex || 0;
	const end = rightIndex || arr.length - 1;
	if(leftIndex > rightIndex ) return 'not found el'

	const midIndex = Math.floor((start + end) / 2)

	if(arr[midIndex] === target) return midIndex;

	if(arr[midIndex] < target) {
		return binarySearchRecursion(arr, target, midIndex + 1, rightIndex)
	} else {
		return binarySearchRecursion(arr, target, leftIndex, midIndex - 1)
	}
}

console.log('--  binarySearchRecursion   -->', binarySearchRecursion(array, 3));
