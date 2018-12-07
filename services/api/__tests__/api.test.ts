import { axiosMockFactory } from '../../../utils/tests/axiosMockFactory';
import { Api } from '../api';

const mockApiInstance = axiosMockFactory((config) =>
  Promise.resolve({
    data: 'data',
    status: 200,
    statusText: 'OK',
    headers: [],
    config
  })
);

class ApiExmaple extends Api {
  constructor() {
    super(mockApiInstance);
  }

  public getFakeData() {
   return this.api.get('data');
  }
}

describe('Api class suite', () => {

  test('main class should produce instance without errors', () => {
    expect(() => new Api()).not.toThrow();
  });

  test('should produce instance without errors', () => {
    expect(() => new ApiExmaple()).not.toThrow();
  });

  test('should return data after request', async () => {
    expect.assertions(1);
    const api = new ApiExmaple();
    await expect(api.getFakeData()).resolves.toMatchObject({
      data: 'data',
      status: 200,
      statusText: 'OK',
      headers: [],
    });
  });

});
