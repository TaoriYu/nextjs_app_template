import getConfig from 'next/config';
import { IConfigFields } from '../types/IConfig';

/**
 * Возвращает publicRuntimeConfig из nextJSConfig, если указан key вернет свойство key из
 * publicRuntimeConfig
 * @param {T} key - ключ из конфигурации
 * @returns {IConfigFields | IConfigFields[T]}
 * @example
 *  const { apis: defaultUrl } = publicConfig();
 *  console.log(defaultUrl) // -> localhost;
 *  // another
 *  const { defaultUrl } = publicConfig('apis');
 *  console.log(defaultUrl) // -> localhost;
 */
export function publicConfig<T extends keyof IConfigFields>(key: T): IConfigFields[T];
export function publicConfig(): IConfigFields;
export function publicConfig<T extends keyof IConfigFields>(key?: T): IConfigFields | IConfigFields[T] {
  const { publicRuntimeConfig } = getConfig();

  return key ? publicRuntimeConfig[key] : publicRuntimeConfig;
}
