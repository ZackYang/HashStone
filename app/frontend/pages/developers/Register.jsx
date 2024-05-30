import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { FloatingLabel, Button } from "flowbite-react";
import HSButton from "@/components/shared/HSButton.jsx";
import { Link } from "react-router-dom";


const logoUrl = '/images/logo.png';

export default function Register() {
  return (
    <section className="flex h-screen justify-center items-center bg-slate-100">
      <div className="container h-full p-10 m-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center mb-12">
                      <Link to="/">
                        <img
                          className="mx-auto w-48"
                          src={logoUrl}
                          alt="logo"
                        />
                      </Link>
                      <h4 className="mt-1 pb-1 text-xl font-semibold">
                        Sign in
                      </h4>
                      <span className="text-xs">
                        or
                        <a href="#!" className="text-danger-600">
                          {" "}
                          sign up
                        </a>
                      </span>
                    </div>

                    <form>
                      <FloatingLabel variant="standard" label="Email" />
                      <FloatingLabel variant="standard" type="password" label="Password" />
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <HSButton>
                          Sign in
                        </HSButton>
                        {/* <!--Forgot password link--> */}
                        <a href="#!">Terms and conditions</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Have an account?</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Login
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}