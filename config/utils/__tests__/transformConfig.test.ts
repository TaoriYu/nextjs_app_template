import { IAPIConfig, IConfig } from '../../types/IConfig';
import { transform } from '../transformConfig';

describe('configuration transform testing', () => {
  // @ts-ignore
  let defaultConfig: IConfig = {};

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
    const fakeApiConfigFields: IAPIConfig = {
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
