import { useQuery } from "react-query";
import doctorsService from "./../services/doctorsService";

export default function useGetDoctorById(id) {
	const query = useQuery(["doctors", id], () =>
		doctorsService.getById(id));
	return query;
}