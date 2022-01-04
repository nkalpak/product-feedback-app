import * as ReactQuery from 'react-query';
import { InferMutationOptions } from '@/types/utils';

function useCreateProductFeedback(options?: InferMutationOptions<any>) {
  return ReactQuery.useMutation('a', async () => {}, options);
}

export { useCreateProductFeedback };
