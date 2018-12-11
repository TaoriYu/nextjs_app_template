export interface IConfigGroup<T extends IWithPublic = IWithPublic> {
  [N: string]: T;
}

export interface IWithPublic {
  public: boolean;
}

export type TMappedFields<T, E> = { [N in keyof T]: E };

export type TReturnConfigGroup<T = unknown> = TMappedFields<T, IConfigGroup>;
