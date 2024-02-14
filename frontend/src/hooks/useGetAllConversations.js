import { useQuery } from "react-query";
import conversationsService from "./../services/conversationsService";
import useIdToken from "./useIdToken";
import { useEffect } from "react";

export default function useGetAllConversations(cursor, pageSize = 5) {
	const token = useIdToken();
	const { refetch, ...query } = useQuery(["conversations", cursor, token],
		() => conversationsService.getAll(token, { cursor, pageSize }),
		{ enabled: false });

	useEffect(() => {
		if (token !== "default-token")
			refetch();
	}, [token, cursor,]);

	return query;
}