import { useMutation } from "react-query";
import conversationsService from "../services/conversationsService";

export default function useCreateConversation() {
	const mutation = useMutation(({ token, firstMessage }) =>
		conversationsService.create(token, { firstMessage }));
	return mutation;
}