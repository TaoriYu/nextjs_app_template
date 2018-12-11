import { IConfig } from '../types/IConfig';
import { IConfigGroup, TReturnConfigGroup } from '../types/internals';

/**
 * Преобразует конфигурацию таким образом, что-бы поля содержащие ключ public помещались в
 * publicRuntimeConfiguration, ключи без public или с public: false помещались в serverRuntimeConfiguration
 * @param {IConfig} cfg - Конфиг над которым будет совершено преобразование
 * @param {T} obj - Объект который будет помещен в нужный раздел конфига
 * @param {keyof IConfigFields} key - ключ в конфиге в который бдует помещен объект
 * @returns {IConfig} - итоговый конфиг nextjs конфигурация.
 * @example
 * const apiConf = { defaultApi: { baseURL: 'some', public: true }, internalApi: { baseURL: 'other' } }
 * const defaultNextConfig = {
 *  publicRuntimeConfig: {
 *    apis: {},
 *  },
 *  serverRuntimeConfig: {
 *    apis: {},
 *  },
 * }
 * const nextConfig = transform(defaultNextConfig, apiConf, 'apis');
 * console.log(nextConfig) // -> {
 *  publicRuntimeConfig: {
 *    apis: { defaultApi: { baseURL: 'some', public: true } },
 *  },
 *  serverRuntimeConfig: {
 *    apis: { internalApi: { baseURL: 'other' } },
 *  },
 * }
 */
export function transform<Fields extends TReturnConfigGroup<Fields>, T extends IConfigGroup>(
  cfg: IConfig<Fields>,
  obj: T,
  key: keyof Fields
) {
  return Object.keys(obj).reduce(
    (acc, val: keyof T) => {
      if (!acc.publicRuntimeConfig[key] || !acc.serverRuntimeConfig[key]) {
        throw new Error(
          'you\'re mistakenly try to transform configuration with key: ' + key + ' that isn\'t in configuration\n' +
            'please add ' + key + ' to your default configuration'
        );
      }

      if (obj[val].public) {
        Object.assign(acc.publicRuntimeConfig[key], { [val]: obj[val] });
      } else {
        Object.assign(acc.serverRuntimeConfig[key], { [val]: obj[val] });
      }
      return acc;
    },
    cfg,
  );
}
