export type Omit<From, What> = Pick<From, Exclude<keyof From, keyof What>>;
export type OmitDif<From, What> = Pick<From, Extract<keyof From, keyof What>>;
