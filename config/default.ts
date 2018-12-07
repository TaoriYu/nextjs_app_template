import { AxiosRequestConfig } from 'axios';

interface IAPIConfig {
  [apiName: string]: Pick<AxiosRequestConfig, 'baseURL' | 'timeout'>;
}

interface IConfig {
  apis: IAPIConfig;
}

export const appConfig: IConfig = {
  apis: {
    defaultApi: {
      baseURL: 'http://localhost:8080',
      timeout: 50,
    }
  }
};
