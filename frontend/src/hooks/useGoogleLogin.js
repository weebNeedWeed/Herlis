import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useCallback } from "react";
import auth from "../firebase";

export default function useGoogleLogin() {
	const login = useCallback(() => {
		return signInWithPopup(auth, new GoogleAuthProvider());
	}, []);
	return login;
}