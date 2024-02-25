import { IoIosArrowBack } from "react-icons/io";
import { BiHome } from "react-icons/bi";
import MenuItem from "./MenuItem";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useState } from "react";
import clsx from "clsx";
import { FaRegUserCircle } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function SideMenu() {
    const [grow, setGrow] = useState(false);
    return (
        <div className={clsx(
            "transition-all bg-app max-w-[35%] min-w-20 flex flex-col items-center justify-start shadow-md shadow-slate-400",
            "shrink-0",
            grow ? "w-[14rem]" : "w-0")}>
            <div className="w-full h-full flex flex-col items-center justify-start text-white px-4">
                <div className="flex w-full justify-end py-5">
                    <button onClick={() => setGrow(_ => !_)}>
                        <IoIosArrowBack className={clsx("text-2xl transition-all", !grow && "rotate-180")} />
                    </button>
                </div>

                <hr className="bg-white w-full" />

                <MenuItem
                    to="/"
                    label="Trang chủ"
                    icon={<BiHome className="text-2xl" />}
                    grow={grow} />
                <MenuItem
                    to="/chat"
                    label="Trò chuyện"
                    icon={<IoChatbubblesOutline className="text-2xl" />}
                    grow={grow} />
                <MenuItem
                    to="/doctors"
                    label="Bác sĩ"
                    icon={<MdOutlineHealthAndSafety className="text-2xl" />}
                    grow={grow} />
                <MenuItem
                    to="/auth/signout"
                    label="Đăng xuất"
                    className="text-red-500 font-semibold hover:bg-red-400/[.4]"
                    icon={<VscSignOut className="text-2xl" />}
                    grow={grow} />

            </div>
            <MenuItem
                center
                to="/auth/signin"
                label="Tài khoản"
                icon={<FaRegUserCircle className="text-2xl" />}
                grow={grow}
                className="w-full text-white py-7 bg-[rgba(255,255,255,0.2)]"
            />
        </div>
    );
}

export default SideMenu;
