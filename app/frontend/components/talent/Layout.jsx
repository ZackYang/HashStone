import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideNav from "./SideNav.jsx";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden w-full">
      <SideNav className={''} />
      <div className="grow container">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;
