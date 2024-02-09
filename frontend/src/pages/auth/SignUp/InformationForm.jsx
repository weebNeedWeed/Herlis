import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../../components/form/Button";
import Input from "../../../components/form/Input";
import { useSignUpContext } from "../../../contexts/SignUpContext";

function InformationForm() {
  const [, dispatch] = useSignUpContext();
  const methods = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = handleSubmit((data) => {
    dispatch({ type: "SUBMIT_INFORMATION_FORM", payload: data });
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="w-full mb-4">
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
