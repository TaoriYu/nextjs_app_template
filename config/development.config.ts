import { IConfig, IConfigFields } from './types/IConfig';
import * as apis from './apis';
import { composeTransformations } from './utils/composeTransformations';

const defaultConfig: IConfig<IConfigFields> = {
  publicRuntimeConfig: {
    apis: {},
  },
  serverRuntimeConfig: {
    apis: {},
  },
};

export const appConfig: IConfig<IConfigFields> = composeTransformations(
  defaultConfig,
  [apis, 'apis'],
);

export default appConfig;
