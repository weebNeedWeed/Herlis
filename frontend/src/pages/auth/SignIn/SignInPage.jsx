import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import ForgotPasswordPage from "./ForgotPassword";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../../firebase/index";

function SignInPage() {
  const [rememberMe, setRememberMe] = useState();
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Sai thông tin đăng nhập");
      });
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const isNewUser = getAdditionalUserInfo(result).isNewUser;
        if (isNewUser) {
          console.log("Welcome new user!");
        } else {
          console.log("Welcome back!");
        }
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center font-baloo w-screen h-screen bg-neutral-100">
      <div className="flex items-center text-3xl mb-4 p-8 shadow-2xl rounded-2xl w-11/12 md:w-1/2 lg:w-1/3 h-auto">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center pb-5 text-3xl">Đăng nhập</div>
          {/*Nhập email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Yêu cầu tài khoản",
                pattern: /^\S+@\S+$/i,
              })}
              placeholder="Email address"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>
          {/*Nhập mật khẩu */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Nhập mật khẩu",
              })}
              placeholder="Mật khẩu"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>
          {/* Box remember me và quên mật khẩu*/}
          <div className="mb-4 flex justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-700">
                Ghi nhớ tài khoản
              </span>
            </label>
            <NavLink
              to={`/auth/forgot-password`}
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Quên mật khẩu ?
            </NavLink>
          </div>

          {/*Nút đăng nhập */}

          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#228E8E] hover:bg-[#228E8E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Đăng nhập
          </button>

          {/*Chuyển sang đăng ký */}
          <div className="flex justify-center pb-8 space-x-1">
            <p className="mt-2 text-sm text-center text-gray-600">
              Chưa có tài khoản ?
            </p>

            <NavLink
              to={`/auth/signup`}
              className=" text-sm pt-2 text-indigo-600 hover:text-indigo-500"
            >
              Đăng ký
            </NavLink>
          </div>

          {/*Nút google */}

          <button className="flex justify-center mb-4 w-full shadow-sm rounded-md bg-white hover:bg-border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            <div className="flex py-2 ">
              <FcGoogle className="pr-2 " />
              <div
                className="w-full inline-flex pt-0.5 border border-transparent  text-base font-medium  text-black "
                type="button"
                onClick={googleSignIn}
              >
                Đăng nhập với google
              </div>
            </div>
          </button>
          {error && (
            <div className=" text-red-600 text-sm text-center">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
