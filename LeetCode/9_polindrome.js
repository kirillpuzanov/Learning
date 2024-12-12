const f = 0
/**
 Given an integer x, return true if x is a palindrome, and false otherwise.

 Example 1:
 Input: x = 121
 Output: true
 Explanation: 121 reads as 121 from left to right and from right to left.

 Example 2:
 Input: x = -121
 Output: false
 Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore, it is not a palindrome.

 ---
 Проверить является ли число полиндромом
 */


// https://leetcode.com/problems/palindrome-number/description/

const isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  const arr = [...String(x)];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - (i + 1)]) {
      return false
    }
    if (i >= arr.length / 2) {
      continue
    }
  }
  return true
};
