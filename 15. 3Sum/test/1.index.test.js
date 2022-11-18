const threeSum = require('./../source/1.index');

test('[-1,0,1,2,-1,-4]', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1]
  ]);
});

test('[0,1,1]', () => {
  expect(threeSum([0, 1, 1])).toEqual([]);
});

test('[0,0,0]', () => {
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});

test('[0,0,0,0]', () => {
  expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
});

test('[-2,0,0,2,2]', () => {
  expect(threeSum([-2, 0, 0, 2, 2])).toEqual([[-2, 0, 2]]);
});
