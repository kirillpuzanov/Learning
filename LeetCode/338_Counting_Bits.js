/**
 	Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 	ans[i] is the number of 1's in the binary representation of i.

	Input: n = 5
	Output: [0,1,1,2,1,2]
	  Explanation:
	  0 --> 0
	  1 --> 1
	  2 --> 10
	  3 --> 11
	  4 --> 100
	  5 --> 101

 	Посчитать количество единиц, во всех числах от 0 до n, если представлять их в двоичной системе исчесления
 */

// https://leetcode.com/problems/counting-bits/

const countBits = function (n) {
  const ans = [0]
  for (let num = 1; num <= n; num++) {
	const cur = num.toString(2) // бинарное строковое представление числа
	let count = 0;
	[...cur].forEach((el) => {
	  if (!!Number(el)) {
		count++
	  }
	})
	ans.push(count)
  }
  return ans
};

// countBits(5)


function getOneCount(n) {
  let cur = n;
  let count = 0;

  while (cur > 0) {
	if (cur % 2 === 1) { //  1 % 2 вернет 1
	  count++
	}
	cur = Math.floor(cur / 2); // Math.floor(cur / 2) даст 1 !!!!
  }
  return count
}

const countBits2 = function (n) {
  const res = [0];

  for (let i = 1; i <= n; i++) {
	res.push(getOneCount(i))
  }
  return res
};
console.log('-->  => ', countBits2(5));

