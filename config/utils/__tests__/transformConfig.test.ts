import { IApi, IConfig } from '../../types/IConfig';
import { IConfigGroup } from '../../types/internals';
import { transform } from '../transformConfig';

describe('configuration transform testing', () => {
  let defaultConfig: IConfig<any> = {
    serverRuntimeConfig: {},
    publicRuntimeConfig: {},
  };

  beforeEach(() => {
    defaultConfig = {
      publicRuntimeConfig: {
        apis: {},
      },
      serverRuntimeConfig: {
        apis: {},
      },
    };
  });

  test('should place public members into publicRuntimeConfig', () => {
    const fakeApiConfigFields: IConfigGroup<IApi> = {
      testOne: { baseURL: 'test', timeout: 0, public: true },
      testTwo: { baseURL: 'testTwo', timeout: 20, public: false },
    };

    expect(transform(defaultConfig, fakeApiConfigFields, 'apis')).toEqual({
      publicRuntimeConfig: {
        apis: {
          testOne: { baseURL: 'test', timeout: 0, public: true },
        },
      },
      serverRuntimeConfig: {
        apis: {
          testTwo: { baseURL: 'testTwo', timeout: 20, public: false },
        },
      },
    });
  });
});
