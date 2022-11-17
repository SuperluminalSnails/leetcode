/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/**
 * 循环打标签
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let p = head;
  while (p) {
    if (p.tag) {
      return true;
    }
    p.tag = true;
    p = p.next;
  }
  return false;
};
