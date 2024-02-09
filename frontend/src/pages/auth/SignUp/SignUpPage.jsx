import InformationForm from "./InformationForm";
import CredentialForm from "./CredentialForm";
import { SignUpContextProvider, useSignUpContext } from "../../../contexts/SignUpContext";
import { useEffect } from "react";
import useEmailAndPasswordRegister from "../../../hooks/useEmailAndPasswordRegister";
import useStoreUserInformation from "../../../hooks/useStoreUserInformation";

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
  const { mutate, error, data } = useStoreUserInformation();
  const { stepDone, signUpMethod } = state;

  console.log(error, data)

  useEffect(() => {
    if (stepDone !== 2)
      return;

    (async () => {
      if (signUpMethod === "password") {
        const { email, password,
          fullName, phoneNumber, gender, dateOfBirth } = state;
        try {
          const result = await passwordRegister(email, password);
          console.log({ fullName, phoneNumber, gender, dateOfBirth })
          mutate({
            token: await result.user.getIdToken(false),
            information: { fullName, phoneNumber, gender, dateOfBirth }
          });
        } catch (err) {
          // TODO: duplicated email handle
        }
      }
    })();
  }, [stepDone, signUpMethod]);

  return stepDone === 0 ? <CredentialForm /> : <InformationForm />
}

