/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // return JSON.stringify(getCountMap(s)) === JSON.stringify(getCountMap(t));
  const map1 = getCountMap(s);
  const map2 = getCountMap(t);
  for (let key in map1) {
    if (map1[key] === map2[key]) {
      delete map1[key];
      delete map2[key];
    }
  }
  return JSON.stringify(map1) === '{}' && JSON.stringify(map2) === '{}';
};

var getCountMap = function (s) {
  const map = {};
  for (let key of s) {
    if (map[key] === undefined) {
      map[key] = 0;
    }
    map[key]++;
  }
  return map;
};
