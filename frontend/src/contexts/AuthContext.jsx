import { useContext, useReducer, createContext } from "react";

const initialStates = { user: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_INFOR":
      return { ...state, user: action.payload };
    case "SET_USER_AUTH":
      return { ...state, user_auth: action.payload };
    default:
      return state;
  }
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const authReducer = useReducer(reducer, initialStates);
  return (
    <AuthContext.Provider value={authReducer}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authcontext = useContext(AuthContext);
  if (!authcontext) {
    throw new Error("Auth context does not exist");
  }
  return authcontext;
};
