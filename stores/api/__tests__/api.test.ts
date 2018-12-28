import { axiosMockFactory } from '../../../utils/tests';
import { Api } from '../api';

class ApiExample extends Api {
  constructor(data?: any) {
    super(data);
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

  test('should create instance from api key', async () => {
    const api = new ApiExample('defaultApi');
    await expect(api.getFakeData()).resolves.toMatchObject({
      config: {
        url: 'http://test.url/data'
      }
    });
  });

  test('should create instance from existing axios instance', async () => {
    const axios = axiosMockFactory((config) =>
      Promise.resolve({ status: 200, data: 'data', config, headers: [], statusText: 'OK' })
    );
    const api = new ApiExample(axios);
    await expect(api.getFakeData()).resolves.toMatchObject({
      config: {
        url: 'http://test.url/data'
      }
    });
  });

});
