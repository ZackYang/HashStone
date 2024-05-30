import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav.jsx";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
};

export default Layout;