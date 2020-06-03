const sum = require('../src/sum');

describe('sum', () => {

  test('Add two numbers', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  test('Throws a error when a string is passed as argument', () => {
    expect(() => {
      sum(4, '5')
    })
    .toThrow(Error);
  });

  test('Error mensage is “parameters must be numbers”', () => {
    expect(() => {
      sum(4, '5')
    })
    .toThrow(/parameters must be numbers/)
  });

});