import React, { useState } from "react";
import { useLogoutMutation } from "../features/Slices/userApislices";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/Slices/authSlice";

import "./Header.css";

const Header = () => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const { userinfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logutapiCall] = useLogoutMutation();

  const handleToggle = (e) => {
    e.preventDefault();
    setToggleProfile((prev) => !prev);
  };

  const handlelogut = async (e) => {
    e.preventDefault();

    try {
      await logutapiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <nav className=" z:999 fixed bg-purple-600   text-white w-full  px-5 py-3 top-0 flex justify-between ">
      <Link to="/">
        <h1 className="text-2xl  border-l-emerald-300">logo</h1>
      </Link>

      {userinfo ? (
        <>
          <div className="card">
            <h1 onClick={handleToggle} className="cursor-pointer">
              Click me
            </h1>
            {toggleProfile ? (
              <ul className="block absolute text-center p-5 right-1 h-[200px] top-12 shadow-xl w-[200px] leading-6 rounded-2xl  bg-white text-black">
                <li
                  onClick={handleToggle}
                  className="link mt-1 hover:text-white"
                >
                  <Link to="/profile" className="w-full">
                    Profile
                  </Link>
                </li>
                <li
                  onClick={handlelogut}
                  className="link mt-3 hover:text-white"
                >
                  <Link className="w-full" to="/">
                    Logout
                  </Link>
                </li>
                <li
                  onClick={handleToggle}
                  className="link mt-3 hover:text-white"
                >
                  <Link to="/" className="w-full">
                    Home
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <ul className="flex justify-between gap-3">
            <li className="link">
              <Link to="/register"> Register</Link>
            </li>
            <li className="link">
              <Link to="/login"> Login</Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Header;
