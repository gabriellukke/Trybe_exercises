let randomNumber = () => parseInt(Math.random() * (100 - 0));

test('randomNumber', () => {
  randomNumber = jest
    .fn()
    .mockReturnValue(10);

  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});