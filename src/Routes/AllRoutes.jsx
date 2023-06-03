import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Lyouts/Main/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import Login from "../Pages/Login/Login/Login";
import Signup from "../Pages/Signup/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Lyouts/Dashboard/Dashboard";
import MyCart from "../Pages/UserDashboard/MyCart";
import AllUsers from "../Pages/UserDashboard/AllUsers/AllUsers";

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourmenu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
    ],
  },
]);

export default AllRoutes;
