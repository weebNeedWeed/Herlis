import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import InformationForm from "./InformationForm";
import CredentialForm from "./CredentialForm";

function SignUpPage() {
  const methods = useForm();
  const { handleSubmit } = methods;
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [inforpageVisible, setInforpage] = useState(false);
  const [{ user }, dispatch] = useAuthContext();

  const onSubmit = (data) => {
    dispatch({ type: "SET_USER_AUTH", payload: data });
    setInforpage(true);
  };

  const password = watch("password", "");



  return (
    <CredentialForm />
  );
}

export default SignUpPage;
