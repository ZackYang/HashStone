"use client";import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import React from 'react';

export default function NavLink({ href, children, className = "" }) {

  const underScoreClass = "hover:border-b-4 hover:border-blue-500 active:border-b-4 active:border-sky-500 border-b-4 transition-colors duration-200 ease-in-out";

  return (
    <Link
      className={`${className} ${underScoreClass} border-transparent text-xl text-slate-50 hover:text-slate-50 active:text-slate-50`}
      to={href}>
      {children}
    </Link>
  );
}
