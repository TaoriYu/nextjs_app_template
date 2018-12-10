import getConfig from 'next/config';
import { IConfigFields } from '../../types/IConfig';

/**
 * Возвращает serverRuntimeConfig из nextJSConfig, если указан key вернет свойство key из
 * publicRuntimeConfig
 * @param {T} key - ключ из конфигурации
 * @returns {IConfigFields | IConfigFields[T]}
 * @example
 *  const { apis: defaultUrl } = serverConfig();
 *  console.log(defaultUrl) // -> localhost;
 *  // another
 *  const { defaultUrl } = serverConfig('apis');
 *  console.log(defaultUrl) // -> localhost;
 */
export function serverConfig<T extends keyof IConfigFields>(key: T): IConfigFields[T];
export function serverConfig(): IConfigFields;
export function serverConfig<T extends keyof IConfigFields>(key?: T): IConfigFields | IConfigFields[T] {
  const { serverRuntimeConfig } = getConfig();
  return key ? serverRuntimeConfig[key] : serverRuntimeConfig;
}
