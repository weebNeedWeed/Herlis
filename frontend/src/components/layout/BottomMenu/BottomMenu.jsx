import { BiHome } from "react-icons/bi";
import MenuItem from "./MenuItem";
import { IoChatbubblesOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function BottomMenu() {
	return <div className="w-full h-16 grow-0 shrink-0">
		<div className="w-full h-full flex justify-evenly items-center">
			<MenuItem
				to="/"
				icon={<BiHome />}
				label="Trang chủ" />

			<MenuItem
				to="/chat"
				icon={<IoChatbubblesOutline />}
				label="Trò chuyện" />

			<MenuItem
				to="/doctors"
				icon={<MdOutlineHealthAndSafety />}
				label="Bác sĩ" />

			<MenuItem
				className="text-red-500 active:text-red-500"
				to="/auth/signout"
				icon={<VscSignOut />}
				label="Đăng xuất" />
		</div>
	</div>
}

export default BottomMenu;