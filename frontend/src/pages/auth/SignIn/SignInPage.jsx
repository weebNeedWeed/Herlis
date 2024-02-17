import { useState, } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import useEmailAndPasswordLogin from "../../../hooks/useEmailAndPasswordLogin";
import useGoogleLogin from "../../../hooks/useGoogleLogin";
import Input from "./../../../components/form/Input";
import Button from "../../../components/form/Button";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

function SignInPage() {
    const [rememberMe, setRememberMe] = useState(false);
    const passwordLogin = useEmailAndPasswordLogin();
    const googleLogin = useGoogleLogin();
    const navigate = useNavigate();
    const methods = useForm();
    const {
        handleSubmit,
        setError
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await passwordLogin(data.email, data.password, rememberMe);
            toast.success("Đăng nhập thành công");
            navigate("/", { replace: true });
        } catch (err) {
            if (err.code === "auth/invalid-credential") {
                setError("email", { type: "required", message: "Sai tài khoản hoặc mật khẩu" })
                return;
            }

            toast.error("Có lỗi xảy ra, vui lòng thử lại");
        }
    });

    const handleGoogleLogin = async () => {
        try {
            //await googleLogin();
        } catch (err) {

        }
    }

    return (
        <FormProvider {...methods}>
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>
            <form className="w-full" onSubmit={onSubmit}>
                <h2 className="text-center pb-5 text-3xl">Đăng nhập</h2>
                {/*Nhập email */}
                <Input
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Nhập địa chỉ email"
                    validation={{
                        required: "Vui lòng nhập địa chỉ email"
                    }}
                />

                {/*Nhập mật khẩu */}
                <Input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    name="password"
                    label="Mật khẩu"
                    validation={{
                        required: "Vui lòng nhập mật khẩu"
                    }}
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
