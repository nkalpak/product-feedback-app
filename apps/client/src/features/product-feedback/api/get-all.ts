import * as ReactQuery from 'react-query';
import { Api } from '@pfa/api';
import { productRequestKeys } from '@/features/product-feedback/api/query-keys';
import { InferQueryOptions } from '@/types/utils';

async function getAllProductFeedbacksApi() {
  return Api.ProductRequest.getAll();
}

export function useGetAllProductFeedbacks(
  options?: InferQueryOptions<typeof getAllProductFeedbacksApi>
) {
  return ReactQuery.useQuery(productRequestKeys.all, getAllProductFeedbacksApi, options);
}
