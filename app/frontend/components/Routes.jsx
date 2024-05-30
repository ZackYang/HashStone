import React from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Layout from "./shared/home/Layout.jsx";
import DevelopersLayout from "./shared/developers/Layout.jsx";
import DeveloperRegister from "@/pages/developers/Register.jsx";
import Home from "@/pages/home/index.jsx";

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="/developers" element={<DevelopersLayout />}>
          <Route path="/developers/register" element={<DeveloperRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
