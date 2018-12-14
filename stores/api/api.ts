import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import debug from 'debug';
import { unmanaged } from 'inversify';
import { IConfigFields } from '../../config/types/IConfig';
import { publicConfig } from '../../config/utils/publicConfig';
import { provide } from '../provider/provide';
import { Transit } from './transit';

@provide(Api)
export class Api extends Transit {
  protected readonly api: AxiosInstance;
  private apiDebug = debug(this.constructor.name);

  public constructor(@unmanaged() keyOrInstance?: keyof IConfigFields['apis'] | AxiosInstance) {
    super();
    if (typeof keyOrInstance === 'string' || typeof keyOrInstance === 'number') {
      this.api = axios.create({ ...publicConfig('apis')[keyOrInstance] });
    } else if (typeof keyOrInstance !== 'undefined') {
      this.api = keyOrInstance;
    } else {
      this.api = axios.create({ ...publicConfig('apis').defaultApi });
    }
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
