const isValid = require('../souce/1.index');

test("s = () is valid", () => {
  expect(isValid('()')).toBe(true);
});
