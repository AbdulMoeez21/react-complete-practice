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
import RootLayouts from "../layouts/RootLayouts";
import HelpLayouts from "../layouts/HelpLayouts";
import Faq from "../pages/help/Faq";
import Contact from "../pages/help/Contact";
import NotFound from "../pages/NotFound";
import CareerLayouts from "../layouts/CareerLayouts";
import Careers from "../pages/careers/Careers";
import Users from "../pages/Users";
import UserLayouts from "../layouts/UserLayouts";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayouts />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="careers" element={<CareerLayouts />}>
        <Route index element={<Careers />} />
      </Route>
      <Route path="/users" element={<UserLayouts />} />
      <Route path="/users/:name" element={<Users />} />
      
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const RouteProvider = () => {
  return <RouterProvider router={router} />;
};

export default RouteProvider;
