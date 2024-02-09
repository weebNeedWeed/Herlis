import { useEffect, useState } from "react";
import auth from "../firebase";

export default function useIdToken() {
	const [token, setToken] = useState(undefined);
	useEffect(() => {
		auth.currentUser.getIdToken(true)
			.then((_) => setToken(_))
			.catch(() => setToken(undefined))
	}, []);

	return token;
}