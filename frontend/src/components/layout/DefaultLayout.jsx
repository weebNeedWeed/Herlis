import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";
import useIdToken from "./../../hooks/useIdToken";
import { useEffect, } from "react";
import { toast } from "react-toastify";

function DefaultLayout() {
    const token = useIdToken();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(token);
        if (!token) {
            // Chuyen den trang dang nhap neu user chua dang nhap
            console.log(token);
            toast.info("Vui lòng đăng nhập trước khi sử dụng dịch vụ");
            navigate("/auth/signin");
            return;
        }
    }, [token]);
    return (
        <div className="font-baloo-tamma fixed w-screen h-screen">
            <div className="flex w-full h-full items-stretch">
                <SideMenu />

                <div className="grow bg-neutral-100">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
