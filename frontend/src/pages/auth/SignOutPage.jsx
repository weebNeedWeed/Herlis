import { useEffect } from "react";
import useSignOut from "../../hooks/useSignOut"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignOutPage() {
	const signOut = useSignOut();
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			try {
				await signOut();
				toast.success("Đăng xuất thành công")
				navigate("/auth/signin", { replace: true })
			} catch (err) {
				navigate("/", { replace: true })
			}
		})();
	}, [])
	return <div></div>
}