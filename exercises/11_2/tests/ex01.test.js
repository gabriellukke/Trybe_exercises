let randomNumber = () => parseInt(Math.random() * (100 - 0));

test('randomNumber', () => {
  randomNumber = jest
    .fn()
    .mockReturnValue(10);

  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalledTimes(2);
});