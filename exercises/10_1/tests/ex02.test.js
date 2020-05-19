const myIndexOf = require('../src/ex02');

describe('myIndexOf', () => {

  const array = [1, 2, 3, 4];

  test('Return the index of the item if is in the array', () => {
    expect(myIndexOf(array, 3)).toBe(2);
  });

  test("Return -1 if the item doesn't exist in the array", () => {
    expect(myIndexOf(array, 5)).toBe(-1);
  });

});