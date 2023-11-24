import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupFormScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <div className="flex items-center   justify-center h-screen">
      <form className="  bg-white border-5-gray-950 p-8 w-3/4 sm:w-2/4 md:w-2/4 rounded shadow-xl">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            name="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-3 items-center justify-start">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <h2>
            Already have an account ?
            <Link className="text-blue-900 " to="/login">
              Login
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default SignupFormScreen;
