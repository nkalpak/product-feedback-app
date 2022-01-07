import * as ReactQuery from 'react-query';
import { Api } from '@pfa/api';
import { InferMutationOptions } from '@/types/utils';
import { productRequestKeys } from '@/features/product-feedback/api/query-keys';

async function createProductFeedbackApi(request: Api.RawClient.ProductRequestCreateRequest) {
  return Api.ProductRequest.create({
    ...request,
    ...(request.status && {
      status: Number(request.status),
    }),
    ...(request.category && {
      category: Number(request.category),
    }),
  });
}

function useCreateProductFeedback(options?: InferMutationOptions<typeof createProductFeedbackApi>) {
  const queryClient = ReactQuery.useQueryClient();

  return ReactQuery.useMutation(createProductFeedbackApi, {
    ...options,
    onSuccess: async (data, variables, context) => {
      await Promise.all([
        queryClient.invalidateQueries(productRequestKeys.all),
        options?.onSuccess?.(data, variables, context),
      ]);
    },
  });
}

export { useCreateProductFeedback };
