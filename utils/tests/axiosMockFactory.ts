import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { publicConfig } from '../../config/utils/publicConfig';

export function axiosMockFactory(responseFactory: (config: AxiosRequestConfig) => Promise<AxiosResponse>) {
  const { defaultApi } = publicConfig('apis');
  return axios.create({
    ...defaultApi,
    adapter: (config) => {
      return responseFactory(config);
    }
  });
}
