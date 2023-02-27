import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import RouteLayouts from "../layouts/RouteLayouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
const RouteProvider = () => {
  return <RouterProvider router={router} />;
};

export default RouteProvider;
