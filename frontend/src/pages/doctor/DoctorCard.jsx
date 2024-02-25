import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
	return (

		<div className="w-full h-64 bg-white shadow rounded hover:shadow-md transition-all">
			<div className="p-4 w-full h-full flex flex-col items-center">
				<div className="w-16 h-16 shadow rounded-full object-cover overflow-hidden">
					<img
						className="rounded-full"
						src={doctor.avatar}
						alt="Bac si" />
				</div>

				<span className="text-base w-full text-center font-semibold mt-1.5">
					{doctor.name}
				</span>

				<span className="text-xs text-slate-400">
					Bác sĩ tâm lý
				</span>

				<span className="flex gap-x-0.5">
					{Array.from(new Array(5)).map((x, i) =>
						<IoIosStar
							key={i}
							className="text-teal-500" />)}
				</span>

				<Link
					to={"/doctors/" + doctor.Auto_id}
					className="rounded-full mt-auto bg-neutral-200 hover:shadow-md transition-all px-4 
									py-0.5 font-normal">
					Liên hệ
				</Link>
			</div>
		</div>
	)
}