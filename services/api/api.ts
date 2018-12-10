import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import debug from 'debug';
import { publicConfig } from '../../config/utils/publicConfig';

export class Api {
  protected readonly api: AxiosInstance;
  private apiDebug = debug(this.constructor.name);

  public constructor(api?: AxiosInstance) {
    this.api = api
      ? api
      : axios.create({ ...publicConfig('apis').defaultApi });
    this.api.interceptors.request.use(this.requestLogger);
    this.api.interceptors.response.use(this.responseLogger);
  }

  private requestLogger = (config: AxiosRequestConfig) => {
    this.apiDebug(config);
    return config;
  }

  private responseLogger = (response: AxiosResponse) => {
    this.apiDebug(response);
    return response;
  }
}
