import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";
import Header from "../../Components/Shared/Header/Header";

const Main = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  const isSignUp = location.pathname.includes("signup");
  return (
    <>
      {isLogin || isSignUp || <Header />}
      <div className="min-h-[100vh-64px-178px-56px]">
        <Outlet />
      </div>
      {isLogin || isSignUp || <Footer />}
    </>
  );
};

export default Main;
