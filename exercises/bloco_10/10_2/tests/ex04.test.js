const service = require('../src/ex04');
jest.mock('../src/ex04')

describe('Testando implementações', () => {
  test('Mockando função para receber um parâmetro e retornar em lowercase', () => {
    service.upper.mockImplementation(s => s.toLowerCase());

    expect(service.upper('STRING')).toBe('string');
    expect(service.upper).toHaveBeenCalled();
    expect(service.upper).toHaveBeenCalledTimes(1);
    expect(service.upper).toHaveBeenCalledWith('STRING');
  });

  test('Mockando função para receber um parâmetro e retornar a última letra', () => {
    service.firstLetter.mockImplementation(a => a.charAt(a.length - 1));

    expect(service.firstLetter('string')).toBe('g');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('string');
  });

  test('Mockando função para receber três parâmetros e retornar sua concatenação', () => {
    service.concatStr.mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

    expect(service.concatStr('st', 'ri', 'ng')).toBe('string');
    expect(service.concatStr).toHaveBeenCalled();
    expect(service.concatStr).toHaveBeenCalledTimes(1);
    expect(service.concatStr).toHaveBeenCalledWith('st', 'ri', 'ng');
  });

});