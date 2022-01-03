import { Api } from '@pfa/api';
import { MakeGenerics, ReactLocation, Route, Router as ReactLocationRouter } from 'react-location';
import { HomeRoutes } from '@/features/home';
import React from 'react';
import { ProductFeedbackRoutes } from '@/features/product-feedback';
import { parseSearch, stringifySearch } from 'react-location-jsurl';

export type LocationGenerics = MakeGenerics<{
  Search: {
    createNewFeedback: Partial<
      Pick<Api.ProductRequest.IProductFeedback, 'title' | 'description' | 'category'>
    >;
  };
}>;

const location: ReactLocation = new ReactLocation({
  parseSearch,
  stringifySearch,
});

const routes: Route<LocationGenerics>[] = [
  { path: '/', element: <HomeRoutes.Home /> },
  {
    path: '/create-new-feedback',
    element: <ProductFeedbackRoutes.CreateNewFeedback />,
  },
];

function Router({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ReactLocationRouter location={location} routes={routes}>
      {children}
    </ReactLocationRouter>
  );
}

export { Router };
