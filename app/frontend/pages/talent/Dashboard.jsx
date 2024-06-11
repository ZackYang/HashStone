import React from 'react';

export default function Dashboard() {
  return (
    <section className="flex h-dvh overflow-y-auto justify-center items-center bg-slate-100">
      <div className="h-full p-10 m-auto">
        <div className="flex flex-col items-center justify-center max-w-md m-auto">
          <img src="/images/logo.png" className="w-24 h-24" alt="logo" />
          <h1 className="text-2xl font-bold text-center mt-4">Profile</h1>
          <p className="text-sm text-center mt-2">Welcome back, User!</p>
          <div className="mt-8 w-full">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-600">Name</label>
                <input type="text" id="name" className="input-box" />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-600">Email</label>
                <input type="email" id="email" className="input-box" />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="password" className="text-sm font-semibold text-gray-600">Password</label>
                <input type="password" id="password" className="input-box" />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="role" className="text-sm font-semibold text-gray-600">Role</label>
                <select id="role" className="input-box">
                  <option value="Talent">Talent</option>
                  <option value="Employer">Employer</option>
                </select>
              </div>
              <button className="btn btn-primary w-full">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}