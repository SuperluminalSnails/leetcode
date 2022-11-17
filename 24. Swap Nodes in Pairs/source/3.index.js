function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 循环没必要一次只走一步
 * 需要有个节点指向前node1,node2的前面节点
 */
var swapPairs = function (head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let tmpNode = dummyHead,
    node1,
    node2;
  while (tmpNode.next && tmpNode.next.next) {
    node1 = tmpNode.next;
    node2 = tmpNode.next.next;
    node1.next = node2.next;
    node2.next = node1;
    tmpNode.next = node2;
    tmpNode = node1;
  }
  return dummyHead.next;
};

module.exports = swapPairs;
