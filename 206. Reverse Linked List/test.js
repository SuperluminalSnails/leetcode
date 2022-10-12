/*
 * @Date: 2022-10-08 13:23:55
 * @LastEditTime: 2022-10-08 13:28:54
 * @Description: file content
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList() {
  const head = new ListNode(1, null);
  let cur = null;
  let pre = head;
  for (let i = 2, len = 3; i <= len; i++) {
    const curNode = new ListNode(i,null);
    cur = curNode;
    pre.next = cur;
    pre = cur;
    cur = cur.next || null;
  }
  return head;
}

const LinkedList = createList();
reverseList(LinkedList);