import { injectable, interfaces } from 'inversify';
import { container } from './container';
import Newable = interfaces.Newable;
import Abstract = interfaces.Abstract;

interface IOpts {
  singletonScope: boolean;
}

const defaultOpts = {
  singletonScope: true,
};

export function makeStore(name: string | Newable<{}> | Abstract<{}> | symbol, opts: IOpts = defaultOpts) {
  return <T extends { new(...args: any[]): {} }>(constructor: T) => {
    opts.singletonScope
      ? container.bind(name).to(constructor).inSingletonScope()
      : container.bind(name).to(constructor);
    return injectable()(constructor);
  };
}
