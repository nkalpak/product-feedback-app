import * as ReactQuery from 'react-query';
import { Api } from '@pfa/api';
import { InferMutationOptions } from '@/types/utils';

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
  return ReactQuery.useMutation(createProductFeedbackApi, options);
}

export { useCreateProductFeedback };
