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
  /** use evn DEBUG=Api:* npm run dev */
  private apiDebug = debug(`Api:${this.constructor.name}`);

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
    const { timeout, baseURL, headers, data, method, params, url } = config;
    this.apiDebug('==request==');
    this.apiDebug({ timeout, baseURL, headers, data, method, params, url });
    this.apiDebug('====end====');
    return config;
  }

  private responseLogger = (response: AxiosResponse) => {
    const { baseURL, url } = response.config;
    this.apiDebug('==response==');
    this.apiDebug({ baseURL, url });
    this.apiDebug(response.headers);
    this.apiDebug(response.data);
    this.apiDebug('====end====');
    return response;
  }
}
