/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) {
    return false;
  }
  let length;
  do {
    length = s.length;
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
  } while (length !== s.length);
  return !s.length;
};
