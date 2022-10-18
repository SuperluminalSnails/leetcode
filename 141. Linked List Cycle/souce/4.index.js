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
 * 快慢指针
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let p = head,
    fp = head;
  while (p && fp) {
    if (p === fp) {
      return true;
    }
    p = p.next;
    fp = fp.next ? fp.next.next : null;
  }
  return false;
};
