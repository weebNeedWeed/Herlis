import { useState, } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
    signInWithPopup,
    GoogleAuthProvider,
    getAdditionalUserInfo,
    signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../../firebase/index";

import Input from "./../../../components/form/Input";
import Button from "../../../components/form/Button";

const emailValidation = {
    required: "Vui lòng nhập địa chỉ email"
}

function SignInPage() {
    const [rememberMe, setRememberMe] = useState();
    const [error, setError] = useState(null);

    const methods = useForm();
    const {
        handleSubmit,
    } = methods;

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
        <FormProvider {...methods}>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
                    validation={emailValidation}
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

                <button className="flex text-base items-center justify-center mb-4 w-full shadow-sm rounded-md bg-white py-2.5 gap-x-2.5">
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
