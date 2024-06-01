import React from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import DeveloperRegister from "@/pages/talnet/Register.jsx";
import Home from "@/pages/landing/Home.jsx";

import Layout from "./home/Layout.jsx";
import DeveloperLayout from "./talnet/Layout.jsx";
import Dashboard from "@/pages/talnet/Dashboard.jsx";

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="/talnet/register" element={<DeveloperRegister />} />
        <Route path="/talnet" element={<DeveloperLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
