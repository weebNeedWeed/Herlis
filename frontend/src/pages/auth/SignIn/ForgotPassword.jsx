import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../../firebase/index";

function ForgotPasswordPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      setMessage(
        "Một đường link cài lại mật khẩu đã được gửi vào email của bạn."
      );
    } catch (err) {
      setError("Gửi link cài lại mật khẩu thất bại. Hãy thử lại sau.");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-neutral-100">
      <div className="bg-white p-8 shadow-2xl rounded-2xl w-full max-w-md">
        <h2 className="text-center text-2xl font-bold mb-4">Quên mật khẩu</h2>
        <p className="text-center mb-6">
          Hãy nhập email vào để nhận đường link cài lại mật khẩu.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              type="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
              placeholder="Your e-mail address"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#228E8E] hover:bg-[#228E8E]"
            >
              Reset my Password
            </button>
          </div>
          {message && <p className="text-green-600">{message}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
