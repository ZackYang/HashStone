import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "./shared/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
};

export default Layout;