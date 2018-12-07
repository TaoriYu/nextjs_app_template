import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { appConfig } from '../../config/default';

export function axiosMockFactory(responseFactory: (config: AxiosRequestConfig) => Promise<AxiosResponse>) {
  return axios.create({
    ...appConfig.apis.defaultApi,
    adapter: (config) => {
      return responseFactory(config);
    }
  });
}
