import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [password, setPassword] = useState(true);
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="border border-gray-50 w-1/3 px-4 shadow-lg">
        <h3 className="text-center text-3xl pb-8 font-semibold">Sign-up</h3>
        <div className="py-5 flex flex-col gap-5">
          <div className="form-control">
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                placeholder="Put your full name"
                className="input Field"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group">
              <span>Email</span>
              <input
                type="email"
                placeholder="Email Here"
                className="input Field"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group">
              <span>Password</span>
              <input
                type={password ? "password" : "text"}
                placeholder="******"
                className="input Field"
              />
              <button
                onClick={() => setPassword(!password)}
                className="mr-2 font-medium"
              >
                {password ? "show" : "hide"}
              </button>
            </label>
          </div>
          <Link
            to="/"
            className="btn btn-secondary font-bold text-white text-base mt-5"
          >
            Login
          </Link>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="font-medium pr-1 hover:text-accent">
              Login
            </Link>
            here!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
