import { Link } from "react-router-dom"
import { MdAccessTimeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import clsx from "clsx";

export default function Card({ image, title, time, owner, to, className }) {
	return (
		<Link to={to} className={clsx(
			"relative bg-red-100 rounded-xl overflow-hidden shrink-0",
			className)}>
			<img
				src={image}
				className="object-cover w-full h-full"
			/>
			<div className="absolute bottom-0 w-full h-2/5 bg-[rgba(15,23,42,0.2)] backdrop-blur-sm"
			>
				<div className="flex flex-col p-2.5 h-full">
					<h4 className="text-white line-clamp-2">
						{title}
					</h4>

					<span className="flex items-center text-white mt-auto text-sm gap-x-1">
						<MdAccessTimeFilled />
						<span className="mt-1">{time} phút</span>
					</span>
				</div>
			</div>
			<div className="absolute top-2.5 left-2.5 py-1 px-2 rounded-md text-white flex items-center gap-x-1
							text-sm bg-[rgba(15,23,42,0.2)] backdrop-blur-sm">
				<FaUser className="text-xs" />
				<span>
					{owner}
				</span>
			</div>
		</Link>
	);
}