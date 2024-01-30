import {NavLink} from "react-router-dom";
import clsx from "clsx";

function MenuItem({icon, to, label}) {
    return (
        <NavLink 
            to={to}
            className={({isActive}) => 
                clsx("flex justify-start mt-2 items-center gap-x-2 w-full px-3 py-4 rounded",
                    `hover:bg-[rgba(255,255,255,0.3)] transition-all`,
                    isActive && "bg-[rgba(255,255,255,0.3)]")} >
            {icon}
            <span className="text-lg pt-1">{label}</span>
        </NavLink>
    );
}

export default MenuItem;
