import { useMutation } from "react-query";
import conversationsService from "../services/conversationsService";

export default function useAddMessage() {
	const mutation = useMutation(({ token, content, id }) =>
		conversationsService.addMessage(token, { content, id }));
	return mutation;
}