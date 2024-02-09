import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../../components/form/Input";
import Button from "../../../components/form/Button";
import { useSignUpContext } from "../../../contexts/SignUpContext";

function CredentialForm() {
	const methods = useForm();
	const { handleSubmit, watch } = methods;
	const [, dispatch] = useSignUpContext();

	const onSubmit = handleSubmit((data) => {
		dispatch({ type: "SUBMIT_CREDENTIAL_FORM", payload: data })
	});

	return <FormProvider {...methods}>
		<form onSubmit={onSubmit} className="w-full">
			<h2 className="text-center pb-5 text-3xl">Đăng ký</h2>

			{/* Email input */}
			<Input
				name="email"
				label="Email"
				type="email"
				placeholder="Nhập địa chỉ email"
				validation={{
					required: "Vui lòng nhập email",
				}}
			/>

			<Input
				type="password"
				placeholder="Nhập mật khẩu"
				name="password"
				label="Mật khẩu"
				validation={{
					required: "Vui lòng nhập mật khẩu",
					pattern: {
						value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/,
						message:
							"Mật khẩu phải có ít nhất 8 ký tự, có chứa ít nhất một ký tự in hoa, một ký tự in thường và một chữ số",
					},
				}}
			/>

			{/* Password confirmation input */}
			<Input
				type="password"
				placeholder="Nhập lại mật khẩu"
				name="passwordConfirmation"
				label="Nhập lại mật khẩu"
				validation={{
					required: "Vui lòng nhập lại mật khẩu",
					validate: (val) => {
						if (watch('password') !== val) {
							return "Nhập lại mật khẩu không trùng khớp";
						}
					},
				}}
			/>

			{/* Submit button */}
			<Button>
				Tiếp tục
			</Button>

			{/* Link to login page */}
			<div className="flex justify-center pb-8 space-x-1">
				<p className="mt-2 text-sm text-center text-gray-600">
					Đã có tài khoản?
				</p>
				<Link
					to="/auth/signin"
					className="text-sm pt-2 text-indigo-600 hover:text-indigo-500"
				>
					Đăng nhập
				</Link>
			</div>
		</form>
	</FormProvider >
}

export default CredentialForm;