import { Api } from '@pfa/api';

export const productRequestKeys = {
  all: ['product-request'] as const,
  allSortBy: (sortBy: Api.RawClient.ProductRequestSortBy) => [...productRequestKeys.all, sortBy],
  allWithFilters: (
    sortBy: Api.RawClient.ProductRequestSortBy,
    filterBy: Api.RawClient.ProductRequestCategory[]
  ) => [...productRequestKeys.all, sortBy, ...filterBy.map((category) => `category${category}`)],
};
