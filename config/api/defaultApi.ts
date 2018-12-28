import { IApi } from '../types/IConfig';
import { IWithEnv } from '../types/internals';

export const defaultApi: IWithEnv<IApi> = {
  dev: {
    baseURL: 'http://api.github.com',
    timeout: 2000,
    public: true,
  },
  production: {
    baseURL: 'http://api.github.com',
    timeout: 2000,
    public: true,
  }
};
