import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const Signup= () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base label-text">Full name</span>
            </label>
            <input
              placeholder="Enter full name"
              type="text"
              id="fullname"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              placeholder="Enter username"
              type="text"
              id="username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              placeholder="Enter password"
              type="text"
              id="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              placeholder="Enter confirm password"
              type="text"
              id="confirmPassword"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckBox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
