import {MakeGenerics, ReactLocation, Route, Router as ReactLocationRouter} from "react-location";
import {HomeRoutes} from "@/features/home";
import React from "react";

type LocationGenerics = MakeGenerics<{}>
const location = new ReactLocation();
const routes: Route<LocationGenerics>[] = [
  { path: "/", element: <HomeRoutes.Home /> }
]

function Router({children}: {children: React.ReactNode}) {
  return <ReactLocationRouter location={location} routes={routes}>
    {children}
  </ReactLocationRouter>
}

export { Router };