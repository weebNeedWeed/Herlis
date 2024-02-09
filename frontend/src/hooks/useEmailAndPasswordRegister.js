import { useCallback } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";

export default function useEmailAndPasswordRegister() {
	const register = useCallback((email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}, []);
	return register;
}