import * as ReactQuery from 'react-query';
import { Api } from '@pfa/api';
import { InferMutationOptions } from '@/types/utils';
import { productRequestKeys } from '@/features/product-feedback/api/query-keys';

interface IData {
  id: string;
  direction: Api.RawClient.ProductRequestVoteDirection;
}

async function productRequestUpvoteApi({ id, direction }: IData) {
  return Api.ProductRequest.vote(id, direction);
}

export function useProductRequestUpvote(
  options?: InferMutationOptions<typeof productRequestUpvoteApi>
) {
  const queryClient = ReactQuery.useQueryClient();
  return ReactQuery.useMutation(productRequestUpvoteApi, {
    ...options,
    onMutate: async (variables) => {
      const oldProductRequests = queryClient.getQueryData<Api.RawClient.ProductRequestDto[]>(
        productRequestKeys.all
      );

      queryClient.setQueryData<Api.RawClient.ProductRequestDto[]>(
        productRequestKeys.all,
        (oldProductRequests) => {
          if (!oldProductRequests) return [];

          return oldProductRequests.map((req) => {
            if (req.id !== variables.id) return req;
            return {
              ...req,
              hasCurrentUserUpvoted: !req.hasCurrentUserUpvoted,
              upvotes: req.hasCurrentUserUpvoted ? req.upvotes - 1 : req.upvotes + 1,
            };
          });
        }
      );

      return () => queryClient.setQueryData(productRequestKeys.all, oldProductRequests);
    },
    onSuccess: async (data, variables, context) => {
      await options?.onSuccess?.(data, variables, context);
    },
    onError: async (error, variables, context) => {
      if (typeof context === 'function') context();
      await options?.onError?.(error, variables, context);
    },
  });
}
