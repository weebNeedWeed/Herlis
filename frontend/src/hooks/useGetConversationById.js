import { useMutation } from "react-query";
import conversationsService from "../services/conversationsService";

export default function useGetConversationById() {
	const mutation = useMutation(({ token, id }) =>
		conversationsService.getById(token, { id }));
	return mutation;
}