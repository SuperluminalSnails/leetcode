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
// 递归做法
/**
 * 返回值：交换后的链表/子链表
 * 调用单元：设交换的两个节点为head,next，next后面为交换完的子链表，head连接交换后的子链表，next连接head
 * 终止条件：head为null（无元素）或next为null（一个元素）
 */
var swapPairs = function (head) {
    if(head === null || head.next === null){
        return head;
    }
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
}