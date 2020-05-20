const isAbove = require('../src/isAbove');

test('Return true if the first argument is bigger than the second and false if the first argument is smaller than the second', () => {
  expect(isAbove(2, 1)).toBeTruthy();
  expect(isAbove(1, 2)).toBeFalsy();
});