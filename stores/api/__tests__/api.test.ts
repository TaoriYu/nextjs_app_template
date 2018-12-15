import { axiosMockFactory } from '../../../utils/tests';
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

class ApiExample extends Api {
  constructor() {
    super(mockApiInstance);
  }

  public getFakeData() {
    return this.api.get('data');
  }
}

describe('Api class suite', () => {

  test('should produce instance without errors', () => {
    expect(() => new ApiExample()).not.toThrow();
  });

  test('should return data after request', async () => {
    expect.assertions(1);
    const api = new ApiExample();
    await expect(api.getFakeData()).resolves.toMatchObject({
      data: 'data',
      status: 200,
      statusText: 'OK',
      headers: [],
    });
  });

});
