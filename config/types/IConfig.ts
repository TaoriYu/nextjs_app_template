export interface IConfig {
  serverRuntimeConfig: IConfigFields;
  publicRuntimeConfig: IConfigFields;
}

export interface IConfigFields extends IWithPublic {
  apis: IAPIConfig;
}

export interface IApi {
  baseURL: string;
  timeout?: number;
  public?: boolean;
}

export interface IAPIConfig {
  [apiName: string]: IApi;
}

export interface IWithPublic {
  [n: string]: { public?: boolean };
}
