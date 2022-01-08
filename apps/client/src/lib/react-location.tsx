import {
  MakeGenerics,
  Outlet,
  ReactLocation,
  Route,
  Router as ReactLocationRouter,
} from 'react-location';
import { HomeRoutes } from '@/features/home';
import React from 'react';
import { ProductFeedbackRoutes } from '@/features/product-feedback';
import { parseSearch, stringifySearch } from 'react-location-jsurl';
import { AuthRoutes, AuthUtils } from '@/features/auth';
import { Api } from '@pfa/api';
import { Flex } from 'theme-ui';

export type LocationGenerics = MakeGenerics<{
  Search: {
    createNewFeedback: Partial<Api.RawClient.ProductRequestDto>;
    code?: string;
    homeView: {
      sortBy?: Api.RawClient.ProductRequestSortBy;
      filterBy?: Api.RawClient.ProductRequestCategory[];
    };
  };
}>;

const location: ReactLocation = new ReactLocation({
  parseSearch,
  stringifySearch,
});

function Auth() {
  const { accessToken } = AuthUtils.useAuthStorage();

  return (
    <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
      {accessToken ? <Outlet /> : <AuthRoutes.Login />}
    </Flex>
  );
}

function NotAuth() {
  const { accessToken } = AuthUtils.useAuthStorage();

  return (
    <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
      {accessToken ? <HomeRoutes.Home /> : <Outlet />}
    </Flex>
  );
}

const routes: Route<LocationGenerics>[] = [
  {
    path: '/auth',
    element: <NotAuth />,
    children: [
      {
        path: '/login',
        element: <AuthRoutes.Login />,
      },
      {
        path: '/register',
        element: <AuthRoutes.Register />,
      },
      { element: <AuthRoutes.Login /> },
    ],
  },
  {
    path: '/',
    element: <Auth />,
    searchFilters: [
      (prev, next) => ({
        ...next,
        homeView: {
          ...prev.homeView,
          ...next.homeView,
        },
      }),
    ],
    children: [
      {
        path: '/create-new-feedback',
        element: <ProductFeedbackRoutes.CreateNewFeedback />,
      },
      { path: '/home', element: <HomeRoutes.Home /> },
      {
        element: <HomeRoutes.Home />,
      },
    ],
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
