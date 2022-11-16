/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new Heap((a, b) => {
    return a < b;
  });
  this.k = k;
  for (let i = 0, len = nums.length; i < len; i++) {
    this.heap.push(nums[i]);
    if (this.heap.arr.length > k) {
      this.heap.pop();
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.push(val);
  if (this.heap.arr.length > this.k) {
    this.heap.pop();
  }
  return this.heap.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
class Heap {
  constructor(compare) {
    this.arr = []; // 存储堆数据
    this.compare = compare ? compare : this.defaultCompare;
  }

  static heapify(data, compare) {
    let heap = new Heap(compare);
    for (let item of data) {
      heap.push(item);
    }
    return heap;
  }

  /**
   * 比较方式，默认大顶堆
   * @param {*} a
   * @param {*} b
   * @returns
   */
  defaultCompare(a, b) {
    return a > b;
  }

  /**
   * 压入堆
   * @param {*} num
   */
  push(num) {
    const { arr } = this;
    if (arr.length === 0) {
      arr.push(num);
    } else {
      arr.push(num);
      let index = arr.length - 1;
      let parentIndex = this.getParentIndex(index);
      while (index > 0 && this.compare(num, arr[parentIndex])) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = this.getParentIndex(index);
      }
    }
  }

  /**
   * 根据索引交换值
   * @param {*} index1
   * @param {*} index2
   */
  swap(index1, index2) {
    const { arr } = this;
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  pop() {
    const { arr } = this;
    if (!arr.length) {
      return;
    }
    this.swap(0, arr.length - 1);
    const num = arr.pop();
    // 下沉
    this._down();
    return num;
  }

  peek() {
    return this.arr[0];
  }

  /**
   * 获取父节点索引
   * @param {*} index
   * @returns
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * 获取子节点索引
   * @param {*} index
   */
  getChildIndex(index) {
    return {
      leftChildIndex: 2 * index + 1,
      rightChildIndex: 2 * index + 2
    };
  }

  _down() {
    const { arr } = this;
    let compareIndex = this._getCompareIndex(0);
    let downIndex = 0;
    while (
      compareIndex !== -1 &&
      this.compare(arr[compareIndex], arr[downIndex])
    ) {
      this.swap(compareIndex, downIndex);
      downIndex = compareIndex;
      compareIndex = this._getCompareIndex(downIndex);
    }
  }

  _getCompareIndex(index) {
    const { arr } = this;
    let { leftChildIndex, rightChildIndex } = this.getChildIndex(index);
    const heapLength = arr.length;
    if (leftChildIndex > heapLength - 1) {
      // 无子节点，无需下沉
      return -1;
    } else if (
      leftChildIndex <= heapLength - 1 &&
      heapLength - 1 < rightChildIndex
    ) {
      // 只有左节点，比较左节点即可
      return leftChildIndex;
    } else if (rightChildIndex <= heapLength - 1) {
      // 既有左节点又有右节点
      return this.compare(arr[leftChildIndex], arr[rightChildIndex])
        ? leftChildIndex
        : rightChildIndex;
    }
  }
}
