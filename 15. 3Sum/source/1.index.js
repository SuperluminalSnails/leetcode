/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0, iLen = nums.length - 3; i <= iLen; i++) {
    // 如果最小的数大于0，则后续求和不可能为零，跳出循环
    if (nums[i] > 0) {
      break;
    }
    // 以第一次为准，去除后续重复结果
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1] && left < right) {
          left++;
        }
        while (nums[right] === nums[right - 1] && left < right) {
          right++;
        }
        left++;
        right--;
      } else if (sum < 0) {
        // 左指针右移
        left++;
      } else if (sum > 0) {
        // 右指针左移
        right--;
      }
    }
  }
  return result;
};

module.exports = threeSum;
