function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(arr) {
  const head = new ListNode(arr[0], null);
  let cur = null;
  let pre = head;
  for (let i = 1, len = arr.length; i < len; i++) {
    const curNode = new ListNode(arr[i], null);
    cur = curNode;
    pre.next = cur;
    pre = cur;
    cur = cur.next || null;
  }
  return head;
}

module.exports = {
  ListNode,
  createList,
};
