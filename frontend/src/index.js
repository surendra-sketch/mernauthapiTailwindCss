import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./features/store";
import HomeScreen from "./Screens/HomeScreen";
import SignupFormScreen from "./Screens/SignupFormScreen";
import ProfessionalProfile from "./Screens/ProfessionalProfile";
import LoginScreen from "./Screens/LoginScreen";
import UpdateScreen from "./Screens/UpdateScreen";
import NotFound from "./Screens/NotFound";

// Goal Screens

import AddGoal from "./Screens/AddGoal";

import PrivateRoute from "./components/PrivateRoute";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/register" element={<SignupFormScreen />} />
      <Route path="/login" element={<LoginScreen />} />

      {/* private routes */}

      <Route to="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfessionalProfile />} />
        <Route path="/updateprofile" element={<UpdateScreen />} />
        <Route path="/addgoal" element={<AddGoal />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
