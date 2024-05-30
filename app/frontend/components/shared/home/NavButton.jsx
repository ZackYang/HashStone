import React from "react";
import { Link } from "react-router-dom";

export function NavButton({
  to,
  children,
  className = "",
}) {
  const hoverFlipColor = "hover:bg-slate-50 hover:text-slate-900";

  return (
    <Link className={`${className} ${hoverFlipColor} font-semibold text-slate-50 text-lg rounded-md px-2 py-0.5`} to={to}>
      {children}
    </Link>
  );
}