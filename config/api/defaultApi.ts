import { IApi } from '../types/IConfig';

export const defaultApi: IApi = {
  baseURL: 'http://api.github.com',
  timeout: 2000,
  public: true,
};
