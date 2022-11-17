/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) {
    return;
  }
  const result = [],
    que = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    if (i - k + 1 > que[0]) {
      // 1.窗口左边界移动到范围外，左边出队
      que.shift();
    }
    // 2.新入队元素大于队列的元素，从右边开始出队
    while (que.length && nums[i] >= nums[que[que.length - 1]]) {
      que.pop();
    }
    que.push(i);
    // 移动k个元素后记录结果
    if (i >= k - 1) {
      result.push(nums[que[0]]);
    }
  }
  return result;
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxSlidingWindow([1], 1));
