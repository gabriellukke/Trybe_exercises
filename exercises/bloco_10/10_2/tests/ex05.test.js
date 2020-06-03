const service = require('../src/ex04');

describe('Testando implementações', () => {
  test('Mockando função para receber um parâmetro e retornar em lowerCase', () => {
    const upper = jest.spyOn(service, 'upper').mockImplementation(a => a.toLowerCase());

    expect(upper('STRING')).toBe('string');
    expect(upper).toHaveBeenCalled();
    expect(upper).toHaveBeenCalledTimes(1);
    expect(upper).toHaveBeenCalledWith('STRING');

    service.upper.mockRestore();

    expect(service.upper('string')).toBe('STRING');
  });
});