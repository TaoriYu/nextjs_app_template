import { IConfig } from '../types/IConfig';
import * as apis from './apis';
import { composeTransformations } from './utils/composeTransformations';

const defaultConfig: IConfig = {
  publicRuntimeConfig: {
    apis: {},
  },
  serverRuntimeConfig: {
    apis: {},
  },
};

export const appConfig: IConfig = composeTransformations(
  defaultConfig,
  [apis, 'apis'],
);

export default appConfig;
