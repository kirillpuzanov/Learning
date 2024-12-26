/**
  You are given an integer array nums consisting of n elements, and an integer k.
  Find a contiguous subarray whose length is equal to k that has the maximum average
  value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

  Дано число k. В массиве из чисел ( также отрицательные ) найти последовательность длинной k,
  которая будет иметь максимальное среднее значение. Вернуть среднее значение.



 Input: nums = [1,12,-5,-6,50,3], k = 4
	Output: 12.75000
	Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 */

// https://leetcode.com/problems/maximum-average-subarray-i/description/

  // todo можно начинать не с 0 итерацию а с k - 1, пропуская некоторые шаги

const findMaxAverage = function (arr, k) {
	if (arr.length === 1) {
	  return arr[0]
	}

	let answer = -Infinity;
	let sum = 0
	const queue = []

	for (let i = 0; i < arr.length; i++) {
	  // всегда складываем очередной элемент в очередь
	  queue.push(arr[i]);

	  if (i < k - 1) {
		// если в очереди недостаточно элементов (меньше k) ничего не делаем
		continue;
	  }

	  if (i === k - 1) {
		// как только элементов достаточно, 1 раз посчитаем сумму
		sum = queue.reduce((acc, el) => acc + el, 0)
		answer = Math.max(answer, sum)
	  } else {
		// при последующих итерациях от суммы отнимаем (и убираем его из очереди) прервый элемент в очереди
		// и добавляем следующий
		// в очереди всегда должно быть либо k либо меньше k элементов
		sum = sum - queue.shift() + arr[i];

		// ищем самую большую сумму из k элемнтов
		answer = Math.max(answer, sum)
	  }
	}
	return answer / k;
  };

const nums = [1, 12, -5, -6, 50, 3]
findMaxAverage(nums, 4) // 12.75
