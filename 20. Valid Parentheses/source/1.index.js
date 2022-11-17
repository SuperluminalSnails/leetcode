/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) {
    return false;
  }
  const sArr = s.split("");
  const sMap = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const stack = [];
  for (let i = 0, len = sArr.length; i < len; i++) {
    if (sMap.has(sArr[i])) {
      // 入栈
      stack.push(sArr[i]);
    } else {
      // 出栈,比较
      if (sMap.get(stack.pop()) !== sArr[i]) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

module.exports = isValid;