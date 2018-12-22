import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// @ts-ignore ignored cause config is sub project
import { appConfig } from '../../config/config';

export function axiosMockFactory(responseFactory: (config: AxiosRequestConfig) => Promise<AxiosResponse>) {
  const { defaultApi } = appConfig.publicRuntimeConfig.apis;
  return axios.create({
    ...defaultApi,
    adapter: (config) => {
      return responseFactory(config);
    }
  });
}
