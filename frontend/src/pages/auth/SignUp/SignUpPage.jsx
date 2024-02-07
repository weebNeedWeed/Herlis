import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import InforPage from "./InformationForm";
import { useAuthContext } from "../../../contexts/AuthContext";

function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [inforpageVisible, setInforpage] = useState(false);
  const [{ user }, dispatch] = useAuthContext();

  const onSubmit = (data) => {
    dispatch({ type: "SET_USER_AUTH", payload: data });
    setInforpage(true);
  };

  const password = watch("password", "");

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-neutral-100">
      {inforpageVisible ? (
        <InforPage />
      ) : (
        <div className="flex items-center p-8 shadow-2xl rounded-2xl w-11/12 md:w-1/2 lg:w-1/3 h-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="text-center pb-5 text-3xl">Đăng ký</div>

            {/* Email input */}
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
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Yêu cầu mật khẩu",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      "Mật khẩu phải có ít nhất 8 ký tự, có chứa chữ và số",
                  },
                })}
                placeholder="Mật khẩu"
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* Password confirmation input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                {...register("password_confirm", {
                  required: "Nhập lại mật khẩu",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
                placeholder="Xác nhận mật khẩu"
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.password_confirm && (
                <p className="text-red-600">
                  {errors.password_confirm.message}
                </p>
              )}
            </div>

            {/* Submit button */}
            <div className="flex justify-center mb-4">
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#228E8E] hover:bg-[#228E8E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Tiếp tục
              </button>
            </div>

            {/* Link to login page */}
            <div className="flex justify-center pb-8 space-x-1">
              <p className="mt-2 text-sm text-center text-gray-600">
                Đã có tài khoản?
              </p>
              <NavLink
                to="/auth/signin"
                className="text-sm pt-2 text-indigo-600 hover:text-indigo-500"
              >
                Đăng nhập
              </NavLink>
            </div>
          </form>
          {/* {error && <div className="text-red-600">{error}</div>} */}
        </div>
      )}
    </div>
  );
}

export default SignUpPage;
