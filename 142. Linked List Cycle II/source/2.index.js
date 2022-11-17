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
  let fast = head,
    slow = head;
  while (fast && slow) {
    if(!fast.next){
        return null;
    }
    fast = fast.next.next;
    slow = slow.next;
    if(fast===slow){
        let pre = head;
        while(pre!==slow){
            pre = pre.next;
            slow = slow.next;
        }
        return pre;
    }
  }
  return null;
};
