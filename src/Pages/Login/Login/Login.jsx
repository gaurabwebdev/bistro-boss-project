import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Components/Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const targetPath = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password, captcha } = data;
    if (validateCaptcha(captcha) === true) {
      login(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(targetPath, { replace: true });
        })
        .then((error) => {
          if (error) {
            console.log(error.message);
          }
        });
    } else {
      toast("Upps invalid captcha");
      return;
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card    shadow-2xl bg-base-100 w-full md:w-3/4 lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="type the captcha"
                className="input input-bordered"
                name="captcha"
                {...register("captcha", { required: true })}
              />

              <label className="label">
                <span>
                  <Link to={"/signup"} className="label-text-alt link text-sm">
                    Create An Account
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <ToastContainer />
          <div>
            <SocialLogin targetPath={targetPath} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
