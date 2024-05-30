import React from "react";
import { Button } from "flowbite-react";

export default function HSButton({ children, className = '', ...props }) {
  const baseClasses = "mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
  const classes = `${className} ${baseClasses}`;

  return (
    <Button
      className={classes}
      type="button"
      style={{
        background: "linear-gradient(to right, #f9c590, #f8924c, #eb793f, #7baac6 #3d5777 #3a475f)",
      }}
    >
      {
        children
      }
    </Button>
  );
}