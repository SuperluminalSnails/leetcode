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
 * map存储标记
 */
var hasCycle = function (head) {
  const map = new Map();
  if (!head || !head.next) {
    return false;
  }
  let p = head;
  while (p) {
    if (map.has(p)) {
      return true;
    } else {
      map.set(p, p);
      p = p.next;
    }
  }
  return false;
};
