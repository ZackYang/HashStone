import React, { useState } from "react";
import { FloatingLabel, Button, Checkbox } from "flowbite-react";
import HSButton from "@/components/shared/HSButton.jsx";
import { Link } from "react-router-dom";

import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import HSOauthButtons from "@/components/shared/HSOauthButtons.jsx";


const logoUrl = '/images/logo.png';

export default function Register() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    type: "Talent"
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    role: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendRequest()
  };

  const sendRequest = async () => {
    fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: registerData }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 422) {
          response.json().then((data) => {
            setErrors(data.errors);
          });
        }
      }
    }).then((data) => {
      console.log(data);

    }).catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }

  return (
    <section className="flex h-screen justify-center items-center bg-slate-100">
      <div className="container max-w-screen-lg h-full p-10 m-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <h4 className="mt-1 pb-1 text-xl font-semibold">
                        Sign Up
                      </h4>
                      <p className="text-md">
                        as
                      </p>
                      <Button.Group className="w-full flex mt-4">
                        <Button className="basis-1/2" size="xs" color="gray">Talent</Button>
                        <Button className="basis-1/2" size="xs" color="gray">Employer</Button>
                      </Button.Group>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <>
                        <FloatingLabel
                          variant="standard"
                          label="Full Name"
                          value={registerData.name}
                          helperText={errors.name ? errors.name[0] : null}
                          color={errors.name ? 'error' : 'default'}
                          onChange={
                            (e) => setRegisterData({ ...registerData, name: e.target.value })
                          } />
                        <FloatingLabel
                          variant="standard"
                          label="Email"
                          value={registerData.email}
                          helperText={errors.email ? errors.email[0] : null}
                          color={errors.email ? 'error' : 'default'}
                          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        />
                        <FloatingLabel variant="standard" type="password"
                          label="Password"
                          value={registerData.password}
                          helperText={errors.password ? errors.password[0] : null}
                          color={errors.password ? 'error' : 'default'}
                          onChange={
                            (e) => setRegisterData({ ...registerData, password: e.target.value })
                          } />
                        <div className="flex flex-col mb-5 pb-1 pt-1 text-center">
                          <div className="flex items-start mb-2">

                            <label className="text-sm font-semibold text-orange-400 hover:underline">
                              <a href="#!">Terms and conditions</a>
                            </label>
                          </div>
                          <HSButton type="submit">Sign up</HSButton>
                        </div>
                      </>
                    </form>
                    {/* <!--Divider--> */}
                    <div className="flex items-center justify-center my-6">
                      <div className="w-6 h-px bg-gray-400 rounded-full"></div>
                      <p className="mx-2 text-sm text-gray-400">or</p>
                      <div className="w-6 h-px bg-gray-400 rounded-full"></div>
                    </div>

                    {/* <!--Oauth buttons--> */}
                    <div className="flex flex-col space-y-4">
                      <HSOauthButtons />
                    </div>

                    {/* <!--Register button--> */}
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Have an account?</p>
                      <Link to="/login" className="btn btn-primary">
                        Login
                      </Link>
                    </div>

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
                    <Link to="/">
                      <img
                        className="mx-auto w-32"
                        src={logoUrl}
                        alt="logo"
                      />
                    </Link>
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company.
                    </h4>
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