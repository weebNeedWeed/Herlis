import { useMutation } from "react-query";
import authenticationService from "./../services/authenticationService";

export default function useStoreUserInformation() {
	const mutation = useMutation(({ token, information }) =>
		authenticationService.storeUserInformation(token, information));
	return mutation;
}