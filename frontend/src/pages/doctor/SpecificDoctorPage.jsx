import { useParams } from "react-router-dom";
import useGetDoctorById from "./../../hooks/useGetDoctorById";
import { Converter } from "showdown";

const converter = new Converter();

function SpecificDoctorPage() {
	const { id } = useParams();
	const { data, isSuccess } = useGetDoctorById(id);

	if (!isSuccess) {
		return <></>
	}

	const { name, avatar, description, speciality, address } = data.data;

	return (
		<div className="px-4 my-28">
			<div className="px-8 py-4 mx-auto bg-white min-h-40 w-full md:w-7/12 relative flex flex-col items-center rounded-md border-2 border-neutral-200">
				<div className="absolute w-32 h-32 bg-red-600 top-[-4.5rem] rounded-full shadow-md overflow-hidden">
					<img
						className="object-cover"
						src={avatar} alt="Avatar bac si" />
				</div>

				<h2 className="mt-12 text-2xl font-bold">
					{name}
				</h2>

				<div className="flex flex-col items-start w-full">
					<h3 className="mt-8 self-start text-xl font-semibold uppercase">
						1. Thông tin bác sĩ
					</h3>

					<div className="" dangerouslySetInnerHTML={{ __html: converter.makeHtml(description) }} />


					<h3 className="mt-8 self-start text-xl font-semibold uppercase">
						2. Chuyên môn
					</h3>

					<div className="" dangerouslySetInnerHTML={{ __html: converter.makeHtml(speciality) }} />

					<h3 className="mt-8 self-start text-xl font-semibold uppercase">
						3. Địa chỉ khám bệnh
					</h3>

					<div className="" dangerouslySetInnerHTML={{ __html: converter.makeHtml(address) }} />

					<button className="self-center my-8 bg-teal-500 rounded-full px-4 py-2 text-white text-lg font-semibold">
						<span>
							Liên hệ
						</span>
					</button>
				</div>

			</div>
		</div>
	);
}

export default SpecificDoctorPage;