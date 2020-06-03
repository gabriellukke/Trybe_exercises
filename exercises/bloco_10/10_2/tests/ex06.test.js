const service = require('../src/fetchDog');

describe('Testando requisição', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test('Testando requisição caso a promisse resolva', async () => {
    service.fetchDog.mockResolvedValue('request success');

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    expect(service.fetchDog()).resolves.toBe('request success');
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test('Testando requisição caso a promisse seja rejeitada', async () => {
    service.fetchDog.mockRejectedValue('request failed');

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    expect(service.fetchDog()).rejects.toMatch('request failed');
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});