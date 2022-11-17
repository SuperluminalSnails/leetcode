/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  let result = [];
  for (let index = 0, len = nums.length; index < len; index++) {
    const other = target - nums[index];
    if (Object.prototype.hasOwnProperty.call(map, other)) {
      result = [index, map[other]];
    } else {
      map[nums[index]] = index;
    }
  }
  return result;
};
