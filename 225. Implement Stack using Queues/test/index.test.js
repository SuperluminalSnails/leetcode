const MyStack = require("../souce/index");

test("Implement Stack using Queues 1", () => {
  /**
   *    ["MyStack", "push", "push", "top", "pop", "empty"]
        [[], [1], [2], [], [], []]
        Output
        [null, null, null, 2, 2, false]
   */
  let stack = new MyStack();
  stack.push(1);
  expect(stack.input).toEqual([1]);
  stack.push(2);
  expect(stack.input).toEqual([1, 2]);
  expect(stack.top()).toBe(2);
  expect(stack.pop()).toBe(2);
  expect(stack.input).toEqual([1]);
  expect(stack.empty()).toBe(false);
});

test("Implement Stack using Queues 2", () => {
  /**
   *    ["MyStack","push","push","top","push","top"]
        [[],[1],[2],[],[3],[]]
        Output
        [null,null,null,2,null,2]
   */
  let stack = new MyStack();
  stack.push(1);
  expect(stack.input).toEqual([1]);
  stack.push(2);
  expect(stack.input).toEqual([1, 2]);
  expect(stack.top()).toBe(2);
  stack.push(3);
  expect(stack.input).toEqual([1, 2, 3]);
  expect(stack.top()).toBe(3);
});
