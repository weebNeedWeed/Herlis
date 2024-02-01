import { IoIosArrowBack } from "react-icons/io";
import { BiHome } from "react-icons/bi";
import MenuItem from "./MenuItem";
import { IoChatbubblesOutline } from "react-icons/io5";

function SideMenu() {
  return (
    <div className="bg-app w-full h-full flex flex-col items-center justify-start text-white px-4">
      <div className="flex w-full justify-end py-5 px-1">
        <button>
          <IoIosArrowBack className="text-2xl" />
        </button>
      </div>

      <hr className="bg-white w-full" />

      <MenuItem
        to="/"
        label="Trang chủ"
        icon={<BiHome className="text-xl" />}
      />
      <MenuItem
        to="/chatbot"
        label="Chat bot"
        icon={<IoChatbubblesOutline className="text-xl" />}
      />
    </div>
  );
}

export default SideMenu;
