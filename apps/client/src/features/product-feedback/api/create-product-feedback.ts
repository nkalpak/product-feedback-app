import * as ReactQuery from 'react-query';
import { Api } from '@pfa/api';
import { InferMutationOptions } from '@/types/utils';

function useCreateProductFeedback(
  options?: InferMutationOptions<typeof Api.ProductRequest.createProductFeedback>
) {
  return ReactQuery.useMutation(Api.ProductRequest.createProductFeedback, options);
}

export { useCreateProductFeedback };
