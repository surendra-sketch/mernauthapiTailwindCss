import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  useUpdateuserMutation,
  useDeteteuserMutation,
} from "../features/Slices/userApislices";
import { setCredentials, logout } from "../features/Slices/authSlice";

const UpdateScreen = () => {
  const { userinfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateuser] = useUpdateuserMutation();
  const [deleteapiCall] = useDeteteuserMutation();

  const [name, setName] = useState(userinfo.name);
  const [email, setEmail] = useState(userinfo.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not matched");
    } else {
      try {
        const res = await updateuser({
          _id: userinfo._id,
          name,
          email,
          password,
        }).unwrap();

        dispatch(setCredentials({ ...res }));
        alert("Profile updated Successfuly");
        navigate("/");
      } catch (err) {
        alert(err?.data?.message || err.error);
      }
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await deleteapiCall().unwrap();
      alert("Profile deleted Successfuly");

      navigate.apply("/");

      dispatch(logout());
    } catch (err) {
      alert(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex items-center   justify-center h-screen">
      <form className="  bg-white border-5-gray-950 p-8 w-3/4 sm:w-2/4 md:w-2/4 rounded shadow-xl">
        <h2 className="text-2xl mb-4">Update Prfile</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
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
            New Password
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
            Confirm New Password
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
        <div className=" flex  gap-3 items-center justify-between md:flex  ">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Profile
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2  rounded hover:bg-red-900 focus:outline-none focus:shadow-outline  "
            type="submit"
          >
            Delete Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateScreen;
