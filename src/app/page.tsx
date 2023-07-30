/** @jsxImportSource @emotion/react */
"use client";
import react from "react";
import styled from "@emotion/styled";

import { color } from "@/app/styles";
import SignInPage from "./SignInPage";
import MainPage from "./MainPage";

import { useAppSelector } from "@/redux/hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100vw;
  height: 100vh;

  padding: 2rem;

  background: ${color.lightGray.standard};

  overflow-y: auto;
`;

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
    <Container>
      {isSignedIn && <MainPage />}
      {!isSignedIn && (
        <SignInPage
          signInData={signInData}
          setSignInData={setSignInData}
          signUpData={signUpData}
          setSignUpData={setSignUpData}
        />
      )}
    </Container>
  );
}
