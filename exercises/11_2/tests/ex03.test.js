let randomNumber = () => parseInt(Math.random() * (100 - 0));

describe('randomNumber', () => {

  test('Mockando função para receber 3 parametros e retornar sua multiplicação', () => {
    randomNumber = jest.fn().mockImplementation((x, y, z) => x * y * z);

    expect(randomNumber(2, 3, 4)).toBe(24);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test('Mockando função que recebe um paramentro e retorna seu dobro', () => {
    randomNumber.mockReset();
    expect(randomNumber).toHaveBeenCalledTimes(0);

    randomNumber.mockImplementation(x => x * 2);

    expect(randomNumber(5)).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(5);
  });
})