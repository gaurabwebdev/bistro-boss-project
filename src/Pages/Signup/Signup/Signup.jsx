import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Components/Shared/SocialLogin/SocialLogin";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const { name, email, photo, password, confirmPassword } = data;
    if (password === confirmPassword) {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          userUpdate(name, photo)
            .then((result) => {
              console.log(name, email);
              const currentUser = { name, email };
              fetch(`http://localhost:5000/users`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(currentUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    toast("account created successfully");
                    navigate("/");
                  }
                });
            })
            .then((error) => {
              if (error) {
                console.log(error);
              }
            });
        })
        .then((error) => {
          if (error) {
            console.log(error.message);
          }
        });
    } else {
      return toast("Upps password doesn't match. Try again");
    }
  };
  const { createUser, userUpdate } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Bistro-Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-full md:w-3/4 lg:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card    shadow-2xl bg-base-100 w-full md:w-3/4 lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Your Photo URL"
                  className="input input-bordered"
                  name="photo"
                  {...register("photo", { required: true })}
                />
              </div>
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
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password Must required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password should contain at least one number and one special
                    character
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm your password"
                  className="input input-bordered"
                  name="confirmPassword"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">Retype Your Password</span>
                )}
              </div>

              <label className="label">
                <span>
                  <Link to={"/login"} className="label-text-alt link text-sm">
                    Login To Your Account
                  </Link>
                </span>
              </label>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <ToastContainer />
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
