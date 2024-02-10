import { useContext, useReducer, createContext } from "react";

const initialStates = {
  email: "",
  password: "",
  fullName: "",
  phoneNumber: "",
  gender: "",
  dateOfBirth: "",

  stepDone: 0,
  signUpMethod: "password"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_CREDENTIAL_FORM":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,

        stepDone: 1, // 1 la da hoan thanh form 1
      };

    case "SUBMIT_INFORMATION_FORM": {
      const { fullName, phoneNumber, gender, dateOfBirth } = action.payload;
      return {
        ...state,
        fullName,
        phoneNumber,
        gender,
        dateOfBirth,

        stepDone: 2,
      }
    }

    case "RESET":
      return {
        ...initialStates
      }

    default:
      return state;
  }
};

const SignUpContext = createContext();

export const SignUpContextProvider = ({ children }) => {
  const _reducer = useReducer(reducer, initialStates);
  return (
    <SignUpContext.Provider value={_reducer}>{children}</SignUpContext.Provider>
  );
};

export const useSignUpContext = () => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error("useSignUpContext must be used within SignUpContext");
  }
  return context;
};
