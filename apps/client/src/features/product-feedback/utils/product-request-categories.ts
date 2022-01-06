import { Api } from '@pfa/api';

export const ProductRequestCategories: Record<Api.RawClient.ProductRequestCategory, string> = {
  [Api.RawClient.ProductRequestCategory.Feature]: 'Feature',
  [Api.RawClient.ProductRequestCategory.Bug]: 'Bug',
  [Api.RawClient.ProductRequestCategory.Ui]: 'UI',
  [Api.RawClient.ProductRequestCategory.Ux]: 'UX',
  [Api.RawClient.ProductRequestCategory.Enhancement]: 'Enhancement',
};
