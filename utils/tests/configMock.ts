import { AxiosRequestConfig } from 'axios';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    apis: {
      defaultApi: {
        baseURL: 'http://test.url/',
        timeout: 200,
        public: true,
        adapter: (config: AxiosRequestConfig) => Promise.resolve({
          data: 'data',
          status: 200,
          statusText: 'OK',
          headers: [],
          config,
        })
      }
    }
  },
  serverRuntimeConfig: {},
}));
