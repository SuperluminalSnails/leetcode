const swapPairs = require("../souce/3.index");
const { createList } = require("../souce/list");

const head = createList([1, 2, 3, 4]);

test("Swap Nodes in Pairs [1,2,3,4] => [2,1,4,3]", () => {
  //   expect(sum(1, 2)).toBe(3);
  const _head = swapPairs(head);
  const _arr = [2, 1, 4, 3];
  let cur = _head;
  for (let i = 0; i < _arr.length; i++) {
    expect(cur.val).toBe(_arr[i]);
    cur = cur.next;
  }
});
