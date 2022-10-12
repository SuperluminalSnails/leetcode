/*
 * @Date: 2022-10-08 12:48:55
 * @LastEditTime: 2022-10-08 13:22:42
 * @Description: file content
 */
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
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  } else {
    let cur = head;
    let next = cur.next;
    next.next = cur;
    cur.next = null;
    return reverseList(head.next);
  }
};
