import React from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

// Layouts
import Layout from "@/components/home/Layout.jsx";
import TalentLayout from "@/components/talent/Layout.jsx";
import AuthLayout from "@/components/auth/Layout.jsx";

// Landing Pages
import Home from "@/pages/landing/Home.jsx";

// Employer Pages
import EmployerRegister from "@/pages/Register.jsx";
import Signin from "@/pages/Signin.jsx";

// Talent Pages
import TalentRegister from "@/pages/Register.jsx";
import Dashboard from "@/pages/talent/Dashboard.jsx";

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Signin />} />
          <Route path="/talent/register" element={<TalentRegister />} />
          <Route path="/employer/register" element={<EmployerRegister />} />
        </Route>
        <Route path="/talent" element={<TalentLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
