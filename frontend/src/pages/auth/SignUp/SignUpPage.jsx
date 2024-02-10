import InformationForm from "./InformationForm";
import CredentialForm from "./CredentialForm";
import { SignUpContextProvider, useSignUpContext } from "../../../contexts/SignUpContext";
import { useEffect } from "react";
import useEmailAndPasswordRegister from "../../../hooks/useEmailAndPasswordRegister";
import useStoreUserInformation from "../../../hooks/useStoreUserInformation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  return (
    <SignUpContextProvider>
      <HandleSignUpComponent />
    </SignUpContextProvider>
  );
}

function HandleSignUpComponent() {
  const [state, dispatch] = useSignUpContext()
  const passwordRegister = useEmailAndPasswordRegister();
  const { mutate, isError, isSuccess } = useStoreUserInformation();
  const navigate = useNavigate();
  const { stepDone, signUpMethod } = state;

  useEffect(() => {
    if (isError) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Đăng ký thành công, đang dăng nhập...");
      navigate("/", { replace: true });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (stepDone !== 2)
      return;

    (async () => {
      if (signUpMethod === "password") {
        const { email, password,
          fullName, phoneNumber, gender, dateOfBirth } = state;
        try {
          const result = await passwordRegister(email, password);
          mutate({
            token: await result.user.getIdToken(false),
            information: { fullName, phoneNumber, gender, dateOfBirth }
          });
        } catch (err) {
          if (err.code === "auth/email-already-in-use") {
            toast.error("Tài khoản đã có người sử dụng");
            dispatch({ type: "RESET" });
            return;
          }

          toast.error("Có lỗi xảy ra, vui lòng thử lại");
        }
      }
    })();
  }, [stepDone, signUpMethod]);

  return stepDone === 0 ? <CredentialForm /> : <InformationForm />
}

