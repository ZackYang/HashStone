import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideNav from "./SideNav.jsx";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideNav sidebarOpen={true} setSidebarOpen={true} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;
