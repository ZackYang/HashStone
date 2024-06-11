import React from "react";
import { Link } from "react-router-dom";
import HSOauthButton from "./HSOauthButton.jsx";

export default function HSOauthButtons({
  action = "Sign up with",
}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <HSOauthButton action={action} />
    </div>
  );
}

