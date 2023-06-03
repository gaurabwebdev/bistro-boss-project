import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = ({ targetPath }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          const currentUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
          };
          fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.message === "User Already Exist") {
                Swal.fire(
                  "Login Successful",
                  "You clicked the button!",
                  "success"
                );
                navigate(targetPath);
              } else if (data.insertedId) {
                toast("account created successfully");
                if (targetPath) {
                  navigate(targetPath);
                } else {
                  navigate("/");
                }
              }
            });
        }
      })
      .then((err) => {
        if (err) {
          console.log(err.message);
        }
      });
  };
  return (
    <div className="mb-5 mx-5">
      <div className="divider">
        OR {(location.pathname === "/login" && "LOGIN") || "SING UP"} WITH
      </div>
      <div className="flex justify-center items-center">
        <div
          onClick={handleGoogleLogin}
          className="p-2 border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-all"
        >
          <FaGoogle className="text-2xl cursor-pointer" />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SocialLogin;
