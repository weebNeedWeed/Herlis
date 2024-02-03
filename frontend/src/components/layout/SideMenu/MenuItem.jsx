import {NavLink} from "react-router-dom";
import clsx from "clsx";

function MenuItem({icon, to, label, grow, className, center}) {
    return (
        <NavLink 
            to={to}
            className={({isActive}) => 
                clsx("mt-2 p-3 rounded",
                    `hover:bg-[rgba(255,255,255,0.3)] transition-all`,
                    grow && "w-full",
                    isActive && "bg-[rgba(255,255,255,0.3)]",
                    className,)} >
            <div className={clsx("flex items-center h-6 gap-x-2", center ? "justify-center" : "justify-start")}>
                {icon}
                {grow && <span className="text-lg text-nowrap mt-1 overflow-hidden">
                    {label}
                </span>}
            </div>
        </NavLink>
    );
}

export default MenuItem;
