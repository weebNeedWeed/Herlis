import { signOut } from "firebase/auth";
import auth from "../firebase";
import { useCallback } from "react";

export default function useSignOut() {
	const signOutFn = useCallback(() => {
		return signOut(auth);
	}, []);
	return signOutFn;
}