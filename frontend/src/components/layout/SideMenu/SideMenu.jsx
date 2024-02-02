import { IoIosArrowBack} from "react-icons/io";
import { BiHome } from "react-icons/bi";
import MenuItem from "./MenuItem";
import { IoChatbubblesOutline } from "react-icons/io5";
import {useState} from "react";
import clsx from "clsx";

function SideMenu() {
    const [grow, setGrow] = useState(true);
    return (
        <div className={clsx("transition-all max-w-[35%] min-w-20", grow ? "w-[14rem]" : "w-0")}>
            <div className="bg-app w-full h-full flex flex-col items-center justify-start text-white px-4">
                <div className="flex w-full justify-end py-5">
                    <button onClick={() => setGrow(_ => !_)}>
                        <IoIosArrowBack className={clsx("text-2xl transition-all", !grow && "rotate-180")}/> 
                    </button>
                </div>

                <hr className="bg-white w-full"/>
            
                <MenuItem 
                    to="/" 
                    label="Trang chủ" 
                    icon={<BiHome className="text-2xl"/>} 
                    grow={grow}/>
                <MenuItem 
                    to="/chatbot" 
                    label="Chat bot" 
                    icon={<IoChatbubblesOutline className="text-2xl"/>} 
                    grow={grow}/>
            </div>
        </div>
    );
}

export default SideMenu;
