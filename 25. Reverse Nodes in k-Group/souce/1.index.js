/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || !head.next) {
    return head;
  }
  const _head =head;
  let cur = null;
  let next = head;
  let count = 1;
  while (next && count <= k) {
    cur = next;
    next = next.next;
    count++;
  }
  if(count<=k){
    return head;
  }else{
    // count>k
    let nextHead = reverseKGroup(next,k);
    let newHead = reverseList(head,k);
    _head.next = nextHead;
    return newHead;
  }
};

var reverseList = function (head, k) {
  let pre = null,
    cur = head,
    count = 1;
  while (cur && count<=k) {
    count++;
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
