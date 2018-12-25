import { IApi, IConfig } from '../../types/IConfig';
import { IConfigGroup } from '../../types/internals';
import { composeTransformations } from '../composeTransformations';

describe('compose config transformations', () => {
  let defaultConfig: IConfig<any> = {
    publicRuntimeConfig: {},
    serverRuntimeConfig: {},
  };

  beforeEach(() => {
    defaultConfig = {
      publicRuntimeConfig: {
        apis: {},
        others: {},
      },
      serverRuntimeConfig: {
        apis: {},
        others: {},
      },
    };
  });

  test('should correctly place fields onto config', () => {
    const fakeApiConfigFields = {
      testOne: { test: { baseURL: 'test', timeout: 0, public: true } },
      testTwo: { test: { baseURL: 'testTwo', timeout: 20, public: false } },
    };
    const fakeOtherConfigFields = {
      testThree: { test: { fieldOne: 'test', public: true } },
      testFour: { test: { fieldTwo: 'testTwo', public: false } },
    };
    const nextConf = composeTransformations(
      defaultConfig,
      [fakeApiConfigFields, 'apis'],
      [fakeOtherConfigFields, 'others'],
    );

    expect(nextConf).toEqual({
      publicRuntimeConfig: {
        apis: {
          testOne: { baseURL: 'test', timeout: 0, public: true },
        },
        others: {
          testThree: { fieldOne: 'test', public: true },
        },
      },
      serverRuntimeConfig: {
        apis: {
          testTwo: { baseURL: 'testTwo', timeout: 20, public: false },
        },
        others: {
          testFour: { fieldTwo: 'testTwo', public: false },
        },
      },
    });
  });

  test('should throw error when composed key not in configuration', () => {
    const fakeApiConfigFields: IConfigGroup<IApi> = {
      testOne: {
        dev: { baseURL: 'test', timeout: 0, public: true },
        test: { baseURL: 'test', timeout: 0, public: true },
        production: { baseURL: 'test', timeout: 0, public: true },
      },
      testTwo: {
        dev: { baseURL: 'testTwo', timeout: 20, public: false },
        test: { baseURL: 'testTwo', timeout: 20, public: false },
        production: { baseURL: 'testTwo', timeout: 20, public: false },
      },
    };
    const error = 'you\'re mistakenly try to transform configuration with key: notInConfigKey that isn\'t in configuration\n' +
      'please add notInConfigKey to your default configuration';
    expect(() => composeTransformations(
      defaultConfig,
      [fakeApiConfigFields, 'notInConfigKey'],
    )).toThrow(error);
  });
});
