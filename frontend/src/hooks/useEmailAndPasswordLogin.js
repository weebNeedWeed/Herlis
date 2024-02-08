import { useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { browserLocalPersistence, browserSessionPersistence } from "firebase/auth";

export default function useEmailAndPasswordLogin() {
	const login = useCallback(async (email, password, rememberMe) => {
		await auth.setPersistence(
			rememberMe ? browserLocalPersistence : browserSessionPersistence);
		return await signInWithEmailAndPassword(auth, email, password)
	}, []);
	return login;
}