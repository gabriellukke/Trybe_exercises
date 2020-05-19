const myFizzBuzz = require('../src/myFizzBuzz.js');

describe('myFizzBuzz', () => {

  test('Return "fizzbuzz" if the passed argument is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('Return "fizz" if the passed argument is only divisble by 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  test('Return "buzz" if the passed argument is only divisble by 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  test("Return the same argument if the passed argument isn't divisible by 3 or 5", () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  test("Return false if the passed argument isn't a number", () => {
    expect(myFizzBuzz('toot')).toBeFalsy();
  });

})