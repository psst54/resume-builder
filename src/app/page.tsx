/** @jsxImportSource @emotion/react */
"use client";
import react from "react";

import SignInPage from "./SignInPage";
import MainPage from "./MainPage";

import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  const isSignedIn =
    useAppSelector((state) => state.userReducer.is_signed_in_resume_builder) ===
    "true";

  const [signInData, setSignInData] = react.useState([
    { label: "이메일", field: "email", value: "", placeholder: "" },
    {
      label: "비밀번호",
      field: "password",
      value: "",
      placeholder: "",
      type: "password",
    },
  ]);

  const [signUpData, setSignUpData] = react.useState([
    {
      label: "이메일",
      field: "email",
      value: "",
      placeholder: "sample@example.com",
    },
    {
      label: "비밀번호",
      field: "password",
      value: "",
      placeholder: "6자리 이상",
      type: "password",
    },
    {
      label: "비밀번호 확인",
      field: "confirmPassword",
      value: "",
      placeholder: "비밀번호를 다시 입력주세요",
      type: "password",
    },
  ]);

  return (
    <>
      {isSignedIn && <MainPage />}
      {!isSignedIn && (
        <SignInPage
          signInData={signInData}
          setSignInData={setSignInData}
          signUpData={signUpData}
          setSignUpData={setSignUpData}
        />
      )}
    </>
  );
}
