var MyStack = function () {
  this.input = [];
  this.output = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  while (this.output.length) {
    this.input.push(this.output.shift());
  }
  this.input.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (!this.output.length) {
    // 调转输出队列
    let tmp = [];
    for (let i = 0, len = this.input.length; i < len - 1; i++) {
      tmp.push(this.input.shift());
    }
    this.output = this.input;
    this.input = tmp;
  }
  return this.output.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (!this.output.length) {
    // 调转输出队列
    let tmp = [];
    for (let i = 0, len = this.input.length; i < len - 1; i++) {
      tmp.push(this.input.shift());
    }
    this.output = this.input;
    this.input = tmp;
  }
  return this.output[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.input.length && !this.output.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

module.exports = MyStack;
