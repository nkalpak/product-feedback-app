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

export type LocationGenerics = MakeGenerics<{
  Search: {
    createNewFeedback: Partial<any>;
    code?: string;
  };
}>;

const location: ReactLocation = new ReactLocation({
  parseSearch,
  stringifySearch,
});

function Auth() {
  const { accessToken } = AuthUtils.useAuthStorage();

  return accessToken ? <Outlet /> : <AuthRoutes.Login />;
}

function NotAuth() {
  const { accessToken } = AuthUtils.useAuthStorage();

  return accessToken ? <HomeRoutes.Home /> : <Outlet />;
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
    children: [
      {
        path: '/create-new-feedback',
        element: <ProductFeedbackRoutes.CreateNewFeedback />,
      },
      { path: '/home', element: <HomeRoutes.Home /> },
      { element: <HomeRoutes.Home /> },
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
