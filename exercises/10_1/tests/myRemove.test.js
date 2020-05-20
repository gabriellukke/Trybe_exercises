const myRemove = require('../src/myRemove');

describe('myRemove', () => {

  test('Return a new array with the item removed', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test("Doesn't change the array passed in the argument", () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test("Return a new array but identical to the passed in the argument if the item doesn't contains in the array", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  
});