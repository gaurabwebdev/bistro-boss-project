import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="min-h-[100vh] flex flex-col justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  } else if (user && isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} to={"/"} replace></Navigate>;
};

export default AdminRoute;
