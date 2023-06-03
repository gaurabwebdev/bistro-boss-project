import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[100vh] flex flex-col justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  } else if (!user) {
    return (
      <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
