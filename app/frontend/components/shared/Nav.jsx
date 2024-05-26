import React from "react";

import VerticalDivider from "./VerticalDivider";
import NavLink from "./NavLink";
import { NavButton } from "./NavButton";
const imgUrl = new URL('/images/logo.png', import.meta.url).href

function NavContent() {
  return (
    <div className="sticky top-0 shadow-md bg-slate-950 py-6 z-30">
      <div className="container mx-auto px-4 bg-transparent">
        <div className="flex justify-between">
          <img src={imgUrl} alt="Logo" className="h-12" />
          <div className="flex items-center gap-8">
            <NavLink href="/process">Process</NavLink>
            <NavLink href="/talents">Talents</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </div>
          <div className="flex items-center gap-4">
            <NavButton className=" bg-sky-600" to="/register">
              Hire Telents
            </NavButton>
            <NavButton className=" bg-orange-500" to="/register">
              Find Jobs
            </NavButton>
            <VerticalDivider className="bg-slate-50" />
            <NavLink href={'/api/auth/signin'}>Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Nav() {
  return (
    <NavContent />
  );
}
