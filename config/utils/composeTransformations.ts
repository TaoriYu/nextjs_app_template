import { IConfig, IConfigFields, IWithPublic } from '../../types/IConfig';
import { transform } from './transformConfig';

/**
 * Композиция из функций трансформации, для большей наглядности
 * @param {IConfig} initialConfig - Начальный конфиг над которым выполняются преобразования.
 * @param {[T, keyof IConfigFields]} rest - Тапл из аргументов transform
 * @returns {IConfig} - nextJsConfiguration
 * @see transform
 * @example
 * export * as apis from './api';
 * export const appConfig: IConfig = composeTransformations(
 *  defaultConfig,
 *  [apis, 'apis'],
 *  [env, 'env'],
 * );
 */
export function composeTransformations<T extends IWithPublic>(initialConfig: IConfig, ...rest: Array<[T, keyof IConfigFields]>): IConfig {
  return rest.reduce((acc, [obj, key]) => transform(acc, obj, key), initialConfig);
}
