import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm, Controller, Form, FormProvider } from "react-hook-form";
import DatePicker from "react-datepicker"; // Corrected import to match the CSS import
import "react-datepicker/dist/react-datepicker.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import auth from "../../../firebase/index";
import { useState, useEffect } from "react";
import Button from "../../../components/form/Button";
import Input from "../../../components/form/Input";

function InformationForm() {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const [user, dispatch] = useAuthContext();
  const [error, setError] = useState(null);


  const onSubmit = (data) => {
    console.log(data)
    // createUserWithEmailAndPassword(
    //   auth,
    //   user.user_auth.email,
    //   user.user_auth.password
    // )
    //   .then((userCredential) => {
    //     console.log("User account created successfully", userCredential.user);
    //     dispatch({
    //       type: "SET_USER_INFOR",
    //       payload: data,
    //     });
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/email-already-in-use") {
    //       setError("Tài khoản đã được đăng ký");
    //     } else {
    //       setError("Error during signup: ", error);
    //     }
    //   });
  };

  useEffect(() => {
    if (user) {
      console.log("User context has been updated", user.user_auth);
    }
  }, [user]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h2 className="text-center pb-5 text-3xl">Đăng ký</h2>
        <Input
          type="text"
          name="fullName"
          placeholder="Nhập họ và tên"
          label="Họ và tên"
          validation={{
            required: "Vui lòng nhập họ tên"
          }}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Giới tính</label>
          <select
            {...register("gender", { required: true })}
            className="mt-1 p-2 w-full shadow-sm text-sm border-gray-400 rounded-md outline-none"
          >
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
          {errors.gender && (
            <p className="text-red-500">{errors.gender.message}</p>
          )}
        </div>

        <Input
          type="text"
          placeholder="Nhập số điện thoại"
          name="phoneNumber"
          label="Số điện thoại"
        />

        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Ngày sinh
          </label>
          <Controller
            name="dateOfBirth"
            control={control}
            rules={{ required: "Vui lòng chọn ngày sinh" }}
            render={({ field }) => (
              <DatePicker
                placeholderText="Chọn ngày"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                maxDate={new Date()}
                wrapperClassName="w-full"
                showYearDropdown
                scrollableYearDropdown
                dropdownMode="select"
                dateFormat="dd/MM/yyyy"
                className="mt-1 p-2 w-full shadow-sm text-sm border-gray-400 rounded-md outline-none flex-grow"
              />
            )}
          />
        </div>

        <Button type="submit">
          Đăng ký
        </Button>
      </form>
    </FormProvider>
  );
}

export default InformationForm;
