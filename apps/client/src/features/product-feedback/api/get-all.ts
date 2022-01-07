import * as ReactQuery from 'react-query';
import { Api } from '@pfa/api';
import { productRequestKeys } from '@/features/product-feedback/api/query-keys';
import { InferQueryOptions } from '@/types/utils';

async function getAllProductFeedbacksApi(sortBy: Api.RawClient.ProductRequestSortBy) {
  return Api.ProductRequest.getAll(sortBy);
}

interface IConfig {
  options?: InferQueryOptions<typeof getAllProductFeedbacksApi>;
  sortBy: Api.RawClient.ProductRequestSortBy;
}

export function useGetAllProductFeedbacks({ sortBy, options }: IConfig) {
  return ReactQuery.useQuery(
    productRequestKeys.allSortBy(sortBy),
    () => getAllProductFeedbacksApi(sortBy),
    options
  );
}
