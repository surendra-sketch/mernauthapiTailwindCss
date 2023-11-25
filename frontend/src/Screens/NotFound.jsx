import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex-col bg-red-100 text-black text-5xl flex justify-center items-center">
      Page Not Found
      <br />
      <h1 className="mt-11 text-red-600 font-bold">
        <Link to="/">Go to Home</Link>
      </h1>
    </div>
  );
};

export default NotFound;
