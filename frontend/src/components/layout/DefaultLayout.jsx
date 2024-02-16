import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";
import useIdToken from "./../../hooks/useIdToken";
import { useEffect, } from "react";
import { toast } from "react-toastify";
import BottomMenu from "./BottomMenu/BottomMenu";

function DefaultLayout() {
    const token = useIdToken();
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            // Chuyen den trang dang nhap neu user chua dang nhap
            console.log(token);
            toast.info("Vui lòng đăng nhập trước khi sử dụng dịch vụ");
            navigate("/auth/signin");
            return;
        }
    }, [token]);
    return (
        <div className="font-baloo-tamma fixed w-screen h-screen max-w-[100vw]">
            <div className="w-full h-full items-stretch hidden md:flex">
                <SideMenu />

                <div className="grow bg-neutral-100 overflow-auto">
                    <Outlet />
                </div>
            </div>

            <div className="w-full h-full flex flex-col md:hidden">
                <div className="grow overflow-auto">
                    <Outlet />
                </div>

                <BottomMenu />
            </div>
        </div>
    );
}

export default DefaultLayout;
