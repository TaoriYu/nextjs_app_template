import getConfig from 'next/config';
import { TBuildedConfigFields } from '../types/internals';

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
export function publicConfig<T extends keyof TBuildedConfigFields>(key: T): TBuildedConfigFields[T];
export function publicConfig(): TBuildedConfigFields;
export function publicConfig<T extends keyof TBuildedConfigFields>(key?: T): TBuildedConfigFields | TBuildedConfigFields[T] {
  const { publicRuntimeConfig } = getConfig();

  return key ? publicRuntimeConfig[key] : publicRuntimeConfig;
}
