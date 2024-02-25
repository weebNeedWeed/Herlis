import SearchBar from "../../components/SearchBar";
import useGetAllDoctors from "./../../hooks/useGetAllDoctors";
import DoctorCard from "./DoctorCard";

function DoctorsPage() {
	const { isSuccess, data } = useGetAllDoctors();

	return (
		<div className="flex flex-col">
			<SearchBar />
			<div className="px-4">
				<h2 className="text-3xl font-semibold mt-2">
					Bác sĩ tâm lý
				</h2>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full mt-2">
					{isSuccess && data.data.map((d, i) =>
						<DoctorCard key={i} doctor={d} />)}
				</div>
			</div>
		</div>
	);
}

export default DoctorsPage;