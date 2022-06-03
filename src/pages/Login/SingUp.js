import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google from "../../asstes/Image_Icon/Icon/Group 573.png";
import auth from "../../firebase.init";
const SingUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex justify-center items-center h-screen mt-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Create an account</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-xs"
                {...register("last", {
                  required: {
                    value: true,
                    message: "Last Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.last?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.last.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="email"
                placeholder="UserName or Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 carater longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full max-w-xs"
                {...register("confirmpassword", {
                  required: {
                    value: true,
                    message: "Confirm password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 carater longer",
                  },
                })}
              />
              <label className="label">
                {errors.confirmpassword?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.confirmpassword.message}
                  </span>
                )}
                {errors.confirmpassword?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.confirmpassword.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn btn-accent mt-3 flex mx-auto px-10"
              type="submit"
              value="Sing Up"
            />
          </form>

          <p>
            <small>
              Don’t have an account?
              <Link to="/login" className="text-accent">
                login account
              </Link>
            </small>
          </p>

          <div className="divider">OR</div>
          <button
             onClick={() => signInWithGoogle()}
            className="btn btn-accent text-white"
          >
            <img src={google} className="w-6 mr-10 " alt="" />
            <span className="ml-5">Continue with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
