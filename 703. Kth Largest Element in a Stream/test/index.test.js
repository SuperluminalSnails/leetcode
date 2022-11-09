const KthLargest = require('./../souce/1.index');

test('sort arr', () => {
  const kthLargest = new KthLargest(2, [0]);
  kthLargest.add(-1);
  console.log(kthLargest.sortArr);
  // expect([8, 5, 4, 3, 2]).toEqual(kthLargest.sortArr);
  // kthLargest.add(5); // return 5
  // expect([8, 5, 5, 4, 3, 2]).toEqual(kthLargest.sortArr);
  // kthLargest.add(10); // return 5
  // expect([10, 8, 5, 5, 4, 3, 2]).toEqual(kthLargest.sortArr);
  // kthLargest.add(9); // return 8
  // expect([10, 9, 8, 5, 5, 4, 3, 2]).toEqual(kthLargest.sortArr);
  // kthLargest.add(4); // return 8
  // expect([10, 9, 8, 5, 5, 4, 4, 3, 2]).toEqual(kthLargest.sortArr);
});
