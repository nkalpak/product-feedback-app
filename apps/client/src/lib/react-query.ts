import { AxiosError } from 'axios';
import * as ReactQuery from 'react-query';

import { GenericFn, UnwrapPromise } from '@/types/utils';

const queryConfig: ReactQuery.DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

const queryClient = new ReactQuery.QueryClient({ defaultOptions: queryConfig });

type QueryConfig<T extends GenericFn> = Omit<
  ReactQuery.UseQueryOptions<
    UnwrapPromise<ReturnType<T>>,
    AxiosError,
    UnwrapPromise<ReturnType<T>>,
    any
  >,
  'queryFn' | 'queryKey'
>;

type MutationConfig<
  T extends GenericFn,
  TError = AxiosError,
  TContext = unknown
> = ReactQuery.UseMutationOptions<UnwrapPromise<ReturnType<T>>, TError, Parameters<T>[0], TContext>;

export { queryClient };
export type { MutationConfig, QueryConfig };
