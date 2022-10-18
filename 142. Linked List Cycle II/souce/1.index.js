/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }
  let p = head;
  while (p) {
    if (p.tag) {
      return p;
    }
    p.tag = true;
    p = p.next;
  }
  return null;
};
