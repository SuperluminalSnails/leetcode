function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 创建链表
 * @param {*} arr
 * @returns
 */
function createList(arr) {
  let list = null;
  for (let i = arr.length - 1, len = 0; i >= len; i--) {
    const num = arr[i];
    let node;
    if (i === arr.length - 1) {
      node = new ListNode(num, null);
    } else {
      node = new ListNode(num, list);
    }
    list = node;
  }
  return list;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode('0');
  let sumNode = head;
  let addOne = 0;
  while (l1 || l2) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    let sum = l1Val + l2Val + addOne;
    addOne = sum >= 10 ? 1 : 0;
    sumNode.next = new ListNode(sum % 10);
    sumNode = sumNode.next;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (addOne) {
    sumNode.next = new ListNode(addOne);
  }
  return head.next;
};

module.exports = {
  addTwoNumbers
};
