import React, { useState } from "react";
import { FloatingLabel, Button } from "flowbite-react";
import HSButton from "@/components/shared/HSButton.jsx";
import { Link } from "react-router-dom";
import CSRFToken from '@/lib/cookies.js';


const logoUrl = '/images/logo.png';

export default function Register() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendRequest()
  };

  const sendRequest = async () => {
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': CSRFToken()
      },
      body: JSON.stringify({ user: registerData }),
    }).then((response) => {
      if (response.ok) {
        if (response.status === 200) {
          response.json().then((data) => {
            window.location.href = data.location;
          });
        }
      } else {
        if (response.status === 422) {
          response.json().then((data) => {
            console.log(data)
          });
        }
      }
    })
  }

  return (
    <section className="flex h-screen justify-center items-center bg-slate-100">
      <div className="container max-w-screen-lg h-full p-10 m-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-l-lg lg:rounded-br-none"
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
                        Welcome back
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <FloatingLabel
                        variant="standard"
                        label="Email"
                        required
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      />
                      <FloatingLabel variant="standard" type="password"
                        label="Password"
                        value={registerData.password}
                        required
                        onChange={
                          (e) => setRegisterData({ ...registerData, password: e.target.value })
                        } />
                      <div className="flex flex-row-reverse my-4">
                        <HSButton type="submit" className="w-full">
                          Login
                        </HSButton>
                      </div>

                      {/* <!--Login button--> */}
                      <div className="flex flex-col mt-12 items-start justify-between text-gray-600 font-light text-sm">
                        <p className="flex mb-0 mr-2">
                          Don't have an account?
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="mb-0 mr-1">
                            Become a
                          </p>
                          <Link to="/talent/register" className="text-orange-500 hover:underline">
                            Talent
                          </Link>
                          <p className="mb-0 mx-1">
                            /
                          </p>
                          <Link to="/register" className="text-orange-500 hover:underline">
                            Employer
                          </Link>
                        </div>
                      </div>
                    </form>
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