import { useEffect, useState } from "react";
import auth from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function useIdToken() {
	// Initialize a true token so that the useEffect block of DefaultLayout
	// Will not redirect to the SignInPage right after rendering
	const [token, setToken] = useState("default-token");
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			console.log(user);
			if (!user) {
				setToken(undefined);
				return;
			}
			user.getIdToken()
				.then(setToken)
				.catch(() => setToken(undefined));
		})
		return unsub;
	}, []);
	return token;
}