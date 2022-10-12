const { addTwoNumbers } = require('./../souce/index');
var assert = require('assert');

/**
 * 创建节点
 * @param {*} val
 * @param {*} next
 */
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

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
// 示例 2：

// 输入：l1 = [0], l2 = [0]
// 输出：[0]
// 示例 3：

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]
it('should return 807', function () {
  const l1 = createList([2, 4, 3]);
  const l2 = createList([5, 6, 4]);
  assert.deepEqual(addTwoNumbers(l1, l2), [7, 0, 8]);
});
it('should return 0', function () {
  const l1 = createList([0]);
  const l2 = createList([0]);
  assert.deepEqual(addTwoNumbers(l1, l2), [0]);
});
it('should return 89990001', function () {
  const l1 = createList([9, 9, 9, 9, 9, 9, 9]);
  const l2 = createList([9, 9, 9, 9]);
  assert.deepEqual(addTwoNumbers(l1, l2), [8, 9, 9, 9, 0, 0, 0, 1]);
});
