import { IApi } from '../types/IConfig';
import { IWithEnv } from '../types/internals';

export const defaultApi: IWithEnv<IApi> = {
  dev: {
    baseURL: 'http://localhost:4100',
    timeout: 200,
    public: true,
  },
  production: {
    baseURL: 'http://localhost:4100',
    timeout: 200,
    public: true,
  }
};
