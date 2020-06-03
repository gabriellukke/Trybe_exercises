let randomNumber = () => parseInt(Math.random() * (100 - 0));

test('randomNumber', () => {
  randomNumber = jest
    .fn()
    .mockImplementationOnce((a, b) => a / b);
    
  expect(randomNumber(10, 2)).toBe(5);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(10, 2);
});