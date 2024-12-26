/**
  Given a positive integer num, return true if num is a perfect square or false otherwise.

  A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

  You must not use any built-in library function, such as sqrt.

 	Проверить является ли число квадратом другого числа, без использования sqrt
 */

// https://leetcode.com/problems/valid-perfect-square/description/
// можно решить за логорифмическое время - бин поиском

const isPerfectSquare = function (num) {
  let left = 0;
  let right = Math.floor(num / 2)

  while (left <= right) {
	const middle = Math.floor((left + right) / 2)
	const sqrt = middle * middle
	if (sqrt === num) {
	  return true
	}
	if (sqrt > num) {
	  right = middle - 1
	} else {
	  left = middle + 1
	}
  }
  return false
};
