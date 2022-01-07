import { Api } from '@pfa/api';

export const productRequestKeys = {
  all: ['product-request'] as const,
  allSortBy: (sortBy: Api.RawClient.ProductRequestSortBy) => [...productRequestKeys.all, sortBy],
};
