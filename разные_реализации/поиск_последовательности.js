// Учитывая числа двоичного массива, верните 
// максимальное количество последовательных единиц в массиве.


// Input: nums = [1,1,0,1,1,1]
// Output: 3

// Input: nums = [1,0,1,1,0,1]
// Output: 2


var findMaxConsecutiveOnes = function(nums) {
	let cur = 0;
	let max = 0;
	for(let i = 0; i < nums.length; i++) {
			cur = nums[i] === 0 ? 0 : cur + 1;
			max = cur > max ? cur : max;
			console.log(max)
	}
	return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))

