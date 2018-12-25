/**
 * Decorator, creates property descriptor to make fields declared with ? existed in class
 * @returns {(target: D, propertyKey: string, descriptor?: PropertyDescriptor) => any}
 */
export function existing<D>() {
  return (target: D, propertyKey: string, descriptor?: PropertyDescriptor): any => {
    return {
      writable: true,
      configurable: true,
      enumerable: true,
      value: undefined,
      ...descriptor
    };
  };
}
