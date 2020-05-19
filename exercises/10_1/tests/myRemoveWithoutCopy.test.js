const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {

  test('Return the array with the item removed', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Change the array passed as argument', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 2);
    expect(array).toEqual([1, 3, 4]);
  });

  test("Return the same array with no changes if the item doesn't contains in the array", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });

});