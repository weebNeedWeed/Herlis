import { BiHome } from "react-icons/bi";
import MenuItem from "./MenuItem";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

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
				to="/hospital"
				icon={<IoChatbubblesOutline />}
				label="Bệnh viện" />

			<MenuItem
				to="/user"
				icon={<FaRegUserCircle />}
				label="Người dùng" />
		</div>
	</div>
}

export default BottomMenu;