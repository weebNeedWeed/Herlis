import { NavLink } from "react-router-dom";
import clsx from "clsx";

function MenuItem({ to, icon, label, className }) {
	return <NavLink
		className={({ isActive }) => clsx(
			className,
			"flex flex-col justify-start items-center",
			"text-2xl text-slate-500 transition-all",
			isActive && "text-teal-400",
		)}
		to={to}>
		{icon}
		<span className="text-sm font-normal">
			{label}
		</span>
	</NavLink>
}

export default MenuItem;