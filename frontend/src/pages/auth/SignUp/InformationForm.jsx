import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker"; // Corrected import to match the CSS import
import "react-datepicker/dist/react-datepicker.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import auth from "../../../firebase/index";
import { useState, useEffect } from "react";
function InforPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [user, dispatch] = useAuthContext();
  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(
      auth,
      user.user_auth.email,
      user.user_auth.password
    )
      .then((userCredential) => {
        console.log("User account created successfully", userCredential.user);
        dispatch({
          type: "SET_USER_INFOR",
          payload: data,
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Tài khoản đã được đăng ký");
        } else {
          setError("Error during signup: ", error);
        }
      });
  };

  useEffect(() => {
    if (user) {
      console.log("User context has been updated", user.user_auth);
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-neutral-100">
      <div className="bg-white p-10 w-[30%] h-auto rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          Thông tin
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className=" flex">Họ và tên</label>
            <input
              {...register("fullName", { required: "Yêu cầu họ tên" })}
              placeholder="Nguyễn Văn A"
              className="flex-grow w-full p-4 border border-gray-300 rounded-md"
            />
            {errors.fullName && (
              <p className="text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div className="flex-grow">
            <label className=" flex">Giới tính</label>
            <select
              {...register("gender", { required: "Chọn giới tính" })}
              className="border-gray-300 rounded-md p-4 ring-1 ring-gray-300"
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
            {errors.gender && (
              <p className="text-red-600">{errors.gender.message}</p>
            )}
          </div>

          <div className="flex-grow">
            <label>Số điện thoại</label>
            <input
              {...register("phoneNumber", { required: false })}
              type="tel"
              placeholder="012345678"
              className="w-full p-4 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex-grow">
            <label className=" flex">Ngày sinh</label>
            <Controller
              name="dateOfBirth"
              control={control}
              rules={{ required: "Chọn ngày sinh" }}
              render={({ field }) => (
                <DatePicker
                  placeholderText="Chọn ngày"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                  dropdownMode="select"
                  dateFormat="dd/MM/yyyy"
                  className="w-full p-4 border border-gray-300 rounded-md"
                />
              )}
            />
          </div>

          {errors.dateOfBirth && (
            <p className="text-red-600">{errors.dateOfBirth.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#228E8E] text-white p-2 rounded-md hover:bg-[#63a9a9]"
          >
            Đăng ký
          </button>

          <div className="text-center text-sm text-gray-600">
            Đã có tài khoản ?
            <NavLink
              to="/auth/signin"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Đăng nhập
            </NavLink>
          </div>
        </form>
        {error && <div className="text-red-600">{error}</div>}
      </div>
    </div>
  );
}

export default InforPage;
