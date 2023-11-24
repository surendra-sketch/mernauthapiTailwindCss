import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../features/Slices/userApislices";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../features/Slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userinfo } = useSelector((state) => state.auth);

  const [loginapiuser] = useLoginMutation();

  useEffect(() => {
    if (userinfo) {
      navigate("/");
    }
  }, [userinfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginapiuser({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
    } catch (err) {
      alert(`${err?.data?.message || err.error}`);
    }
  };

  return (
    <div className="flex items-center   justify-center h-screen">
      <form className="  bg-white border-5-gray-950 p-8 w-3/4 sm:w-2/4 md:w-2/4 rounded shadow-xl">
        <h2 className="text-2xl mb-4">Login</h2>

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
        <div className="flex gap-3 items-center justify-start">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <h2>
            New user ?{" "}
            <Link to="/register" className="text-blue-900 ">
              Sign Up
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
