const mySum = require('../src/mySum');

describe('mySum', () => {

  const array = [1, 2, 3, 4];
  const array2 = [1, -2, -3, 4];

  test('Sum all numbers of the array', () => {
    expect(mySum(array)).toBe(10);
    expect(mySum(array2)).toBe(0);
  });

});