import * as ReactQuery from 'react-query';

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type GenericFn = (...args: any[]) => any;

export type InferMutationOptions<
  T extends GenericFn,
  TError = Error,
  TContext = unknown
> = ReactQuery.UseMutationOptions<UnwrapPromise<ReturnType<T>>, TError, Parameters<T>[0], TContext>;

export type InferQueryOptions<T extends GenericFn> = Omit<
  ReactQuery.UseQueryOptions<
    UnwrapPromise<ReturnType<T>>,
    Error,
    UnwrapPromise<ReturnType<T>>,
    any
  >,
  'queryFn' | 'queryKey'
>;

export type { UnwrapPromise, GenericFn };
