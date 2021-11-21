type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type GenericFn = (...args: any[]) => any;

export type { UnwrapPromise, GenericFn };
