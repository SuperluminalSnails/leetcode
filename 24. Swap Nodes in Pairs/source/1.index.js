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
// 硬做法
var swapPairs = function (head) {
  let pre = null,
    cur = head,
    parent = null;
  let count = 0;
  head = head.next;
  while (cur) {
    count++;
    if (count % 2 === 0) {
      let next = cur.next || null;
      if(parent){
        parent.next = cur;
      }
      cur.next = pre;
      pre.next = next;
      if (count >= 2) {
        parent = cur;
      }
      cur = next;
    } else {
      parent = pre;
      pre = cur;
      cur = cur.next;
    }
  }
  return head;
};
