import { IConfigGroup, IWithPublic, TReturnConfigGroup } from './internals';

export interface IConfig<Fields extends TReturnConfigGroup<Fields>> {
  serverRuntimeConfig: Fields;
  publicRuntimeConfig: Fields;
}

export interface IConfigFields extends TReturnConfigGroup<IConfigFields> {
  apis: IConfigGroup<IApi>;
}

export interface IApi extends IWithPublic {
  baseURL: string;
  timeout?: number;
}
