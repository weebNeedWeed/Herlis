import { useState, } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import useEmailAndPasswordLogin from "../../../hooks/useEmailAndPasswordLogin";
import useGoogleLogin from "../../../hooks/useGoogleLogin";
import Input from "./../../../components/form/Input";
import Button from "../../../components/form/Button";

const emailValidation = {
    required: "Vui lòng nhập địa chỉ email"
}

const passwordValidation = {
    required: "Vui lòng nhập mật khẩu"
}

function SignInPage() {
    const [rememberMe, setRememberMe] = useState(false);
    const passwordLogin = useEmailAndPasswordLogin();
    const googleLogin = useGoogleLogin();

    const methods = useForm();
    const {
        handleSubmit,
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await passwordLogin(data.email, data.password, rememberMe);
        } catch (err) {
        }
    });

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
        } catch (err) {

        }
    }


    return (
        <FormProvider {...methods}>
            <form className="w-full" onSubmit={onSubmit}>
                <div className="text-center pb-5 text-3xl">Đăng nhập</div>
                {/*Nhập email */}
                <Input
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Nhập địa chỉ email"
                    validation={emailValidation}
                />

                {/*Nhập mật khẩu */}
                <Input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    name="password"
                    label="Mật khẩu"
                    validation={passwordValidation}
                />
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
                    <Link
                        to={`/auth/forgot-password`}
                        className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                        Quên mật khẩu ?
                    </Link>
                </div>

                {/*Nút đăng nhập */}

                <Button type="submit">
                    Đăng nhập
                </Button>

                {/*Chuyển sang đăng ký */}
                <div className="flex justify-center pb-8 space-x-1">
                    <p className="mt-2 text-sm text-center text-gray-600">
                        Chưa có tài khoản ?
                    </p>

                    <Link
                        to={`/auth/signup`}
                        className=" text-sm pt-2 text-indigo-600 hover:text-indigo-500"
                    >
                        Đăng ký
                    </Link>
                </div>

                {/*Nút google */}

                <button type="button" onClick={handleGoogleLogin} className="flex text-base items-center justify-center mb-4 w-full shadow-sm rounded-md bg-white py-2.5 gap-x-2.5">
                    <FcGoogle className="text-lg" />
                    <span className="font-medium">
                        Đăng nhập với google
                    </span>
                </button>
            </form>
        </FormProvider>
    );
}

export default SignInPage;
