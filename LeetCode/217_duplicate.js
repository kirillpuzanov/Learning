/**
 Given an integer array nums, return true if any value appears at least twice in the array,
 and return false if every element is distinct.

 Example 1:
 Input: nums = [1,2,3,1]
 Output: true
 Explanation:
 The element 1 occurs at the indices 0 and 3.

 Проверить есть ли повторяющиеся символы
 */

// https://leetcode.com/problems/contains-duplicate/description/?source=submission-ac
const containsDuplicate = function (nums) {
  return new Set(nums).size === nums.length
};
