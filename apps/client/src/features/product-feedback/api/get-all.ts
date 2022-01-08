import * as ReactQuery from 'react-query';
import { Api } from '@pfa/api';
import { productRequestKeys } from '@/features/product-feedback/api/query-keys';
import { InferQueryOptions } from '@/types/utils';
import { Http } from '@/utils';

async function getAllProductFeedbacksApi(
  sortBy: Api.RawClient.ProductRequestSortBy,
  filterBy: Api.RawClient.ProductRequestCategory[]
) {
  return Api.ProductRequest.getAll(sortBy, Http.getArrayQueryParam(filterBy));
}

interface IConfig {
  options?: InferQueryOptions<typeof getAllProductFeedbacksApi>;
  sortBy: Api.RawClient.ProductRequestSortBy;
  filterBy: Api.RawClient.ProductRequestCategory[];
}

export function useGetAllProductFeedbacks({ sortBy, options, filterBy }: IConfig) {
  return ReactQuery.useQuery(
    productRequestKeys.allWithFilters(sortBy, filterBy),
    () => getAllProductFeedbacksApi(sortBy, filterBy),
    options
  );
}
