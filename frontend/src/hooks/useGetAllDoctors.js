import { useQuery } from "react-query";
import doctorsService from "./../services/doctorsService";

export default function useGetAllDoctors() {
	const query = useQuery("doctors", () => doctorsService.getAll());
	return query;
}