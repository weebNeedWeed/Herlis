import { useEffect, useState } from "react";
import { useConversationContext } from "../../contexts/ConversationContext";

const url = import.meta.env.VITE_BASE_URL + '/events';

export default function EventSourceListener() {
	const [{ id, messages }, dispatch] = useConversationContext();
	useEffect(() => {
		if (id.length === 0) {
			return;
		}
		const events = new EventSource(
			url + "?uid=" + id,);

		events.addEventListener("message", function (event) {
			let msg = decodeURI(event.data);
			console.log(msg);
			dispatch({ type: "ADD_MODEL_MESSAGE", payload: msg });
		})
		return () => events.close();
	}, [id, messages]);
	return <></>
}