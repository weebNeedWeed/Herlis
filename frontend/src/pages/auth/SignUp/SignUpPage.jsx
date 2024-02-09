import InformationForm from "./InformationForm";
import CredentialForm from "./CredentialForm";
import { SignUpContextProvider, useSignUpContext } from "../../../contexts/SignUpContext";
import { useEffect } from "react";
import useEmailAndPasswordRegister from "../../../hooks/useEmailAndPasswordRegister";

export default function SignUpPage() {
  return (
    <SignUpContextProvider>
      <HandleSignUpComponent />
    </SignUpContextProvider>
  );
}

function HandleSignUpComponent() {
  const [state,] = useSignUpContext()
  const passwordRegister = useEmailAndPasswordRegister();
  const { stepDone, signUpMethod } = state;

  useEffect(() => {
    if (stepDone !== 2)
      return;

    (async () => {
      if (signUpMethod === "password") {
        const { email, password } = state;
        try {
          const result = await passwordRegister(email, password);
          console.log(result);
        } catch (err) {
          // TODO: duplicated email handle
        }
      }
    })();
  }, [stepDone, signUpMethod]);

  return stepDone === 0 ? <CredentialForm /> : <InformationForm />
}

