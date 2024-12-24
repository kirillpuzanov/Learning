/**
 Given the head of a linked list and an integer val, remove all the nodes
 of the linked list that has Node.val == val, and return the new head.

Удалить все ноды связанного списка, у которых Node.val == val, и вернуть новый заголовок.

 Input: head = [1,2,6,3,4,5,6], val = 6
 Output: [1,2,3,4,5]
 Example 2:

 Input: head = [], val = 1
 Output: []
 Example 3:

 Input: head = [7,7,7,7], val = 7
 Output: []
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */


// https://leetcode.com/problems/remove-linked-list-elements/description/

const removeElements = function (head, val) {
  const dummy = new ListNode(null, head) // если придется удалять первый элемент
  let current = head; // текущая нода
  let prev = dummy; // указатель на предыдущую ноду

  while (current) { // пока не прошли все ноды
	if (current.val === val) {   // нашли что нужно удалить
	  prev.next = current.next;  // меняем связь элементов, убирая из цепочки целевой
	} else {
	  prev = current // по условию двигаем указатель предыдущего
	}
	current = current.next // двигаем всегда текущий
  }
  return dummy.next // указатель на голову списка
};
