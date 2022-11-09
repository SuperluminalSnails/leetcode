/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  // 维护k长度的排序数组
  this.sortArr = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    this.insertNum(nums[i]);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.insertNum(val);
  return this.sortArr[this.k - 1];
};

KthLargest.prototype.insertNum = function (val) {
  if (!this.sortArr.length) {
    this.sortArr.push(val);
  } else {
    let j = 0,
      jlen = this.sortArr.length;
    for (; j < jlen; j++) {
      if (val >= this.sortArr[j]) {
        // 找到了插入位置
        this.sortArr.splice(j, 0, val);
        break;
      }
    }
    if (j === jlen) {
      // 没找到位置插入末尾
      this.sortArr.push(val);
    }
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

module.exports = KthLargest;
