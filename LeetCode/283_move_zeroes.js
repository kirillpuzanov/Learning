/**
 Given an integer array nums, move all 0's to the end of it while maintaining
 the relative order of the non-zero elements.

 Note that you must do this in-place without making a copy of the array.

 Перенести все нули в конец массива не меняя порядок других элементов
 и не деляя копию исходного массива
 */

// https://leetcode.com/problems/move-zeroes/description/

const moveZeroes = function (nums) {
  let mark = 0;
  for (let i = 0; i < nums.length; i++) {
	if (nums[i] !== 0) {
	  // если не ноль меняем местами и двигаем mark
	  [nums[mark], nums[i]] = [nums[i], nums[mark]]
	  mark++
	}
	// а если будет 0, то mark останется на нем, а второй "указатель - i" пойдет дальше циклом
  }
};
// имеем два указателя, первый - очередной элемент, второй указывает на "как бы на ноль"
