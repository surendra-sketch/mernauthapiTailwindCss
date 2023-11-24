import React from "react";
import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { userinfo } = useSelector((state) => state.auth);

  return userinfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
