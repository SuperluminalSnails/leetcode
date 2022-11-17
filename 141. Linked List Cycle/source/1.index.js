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
 * set存储标记
 */
var hasCycle = function (head) {
  const set = new Set();
  if(!head || !head.next){
    return false;
  }
  let p = head;
  while(p){
    if(set.has(p)){
      return true
    }else{
      set.add(p);
      p = p.next;
    }
  }
  return false;
};
