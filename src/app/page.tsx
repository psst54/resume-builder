/** @jsxImportSource @emotion/react */
"use client";
import react from "react";
import styled from "@emotion/styled";

import { color } from "@/app/styles";
import CheckIcon from "@assets/CheckIcon";
import XIcon from "@assets//XIcon";

const Container = styled.div`
  display: flex;
  // align-items: center;

  justify-content: center;

  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  padding-top: 20vh;

  background: ${color.lightGray.standard};
`;
const SignInButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  height: fit-content;
  padding: 1rem 3rem 3rem 3rem;
  background: ${color.white.standard};

  border-radius: 1rem;
`;
const SignInButton = styled.button`
  width: 18rem;
  height: 3rem;
  margin-top: 2rem;

  background: ${color.primary.standard};
  color: ${color.white.standard};
  font-weight: 500;

  border: none;
  border-radius: 1rem;

  cursor: pointer;

  &:active {
    background: ${color.gray.standard};
  }
`;

const InputContainer = {
  display: "flex",
  flexDirection: "column" as "column",
  gap: "0.2rem",
};
const Input = {
  width: "18rem",
  padding: "0.5rem",

  border: `2px solid ${color.inputBorder}`,
  borderRadius: "0.5rem",
};

const ToggleButton = {
  flexGrow: 1,
  background: "transparent",
  padding: "0.5rem 2rem",
  border: "none",
  borderBottom: `2px solid ${color.lightGray.standard}`,

  cursor: "pointer",

  "&:hover": {
    background: color.white.hover,
  },

  "&:active": {
    background: color.white.active,
  },
};

const SelectedToggleButton = {
  borderBottom: `2px solid ${color.primary.standard}`,
};

const CheckPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CheckPasswordItem = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin-left: 1rem;

  color: ${({ isValid }) => (isValid ? color.valid : color.invalid)};
`;

export default function Home() {
  const [isSignIn, setIsSignIn] = react.useState(true);

  const [email, setEmail] = react.useState("");

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

  const checkEmail = () => {
    const email = signUpData.filter(
      (signUpDatum) => signUpDatum.field === "email"
    )[0].value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const checkPasswordLength = () => {
    const password = signUpData.filter(
      (signUpDatum) => signUpDatum.field === "password"
    )[0].value;
    return password !== "" && password.length >= 6;
  };

  const checkConfirmPassword = () => {
    const password = signUpData.filter(
      (signUpDatum) => signUpDatum.field === "password"
    )[0].value;
    const confirmPassword = signUpData.filter(
      (signUpDatum) => signUpDatum.field === "confirmPassword"
    )[0].value;

    return (
      password !== "" && confirmPassword !== "" && password === confirmPassword
    );
  };

  return (
    <Container>
      <SignInButtonWrapper>
        <div css={{ display: "flex" }}>
          <button
            css={[ToggleButton, isSignIn && SelectedToggleButton]}
            onClick={() => {
              setIsSignIn(true);
            }}
          >
            로그인
          </button>
          <button
            css={[ToggleButton, !isSignIn && SelectedToggleButton]}
            onClick={() => {
              setIsSignIn(false);
            }}
          >
            회원가입
          </button>
        </div>

        {isSignIn && (
          <>
            {signInData.map((signInDatum) => (
              <div css={InputContainer}>
                {signInDatum.label}
                <input
                  css={Input}
                  value={signInDatum.value}
                  onChange={(event) => {
                    const newSignInData = signInData.map((oldDatum) =>
                      oldDatum.field === signInDatum.field
                        ? { ...oldDatum, value: event?.target?.value }
                        : oldDatum
                    );

                    setSignInData(newSignInData);
                  }}
                  type={signInDatum?.type}
                />
              </div>
            ))}
          </>
        )}

        {!isSignIn && (
          <>
            {signUpData.map((signUpDatum) => (
              <div css={InputContainer}>
                {signUpDatum.label}
                <input
                  css={Input}
                  value={signUpDatum.value}
                  onChange={(event) => {
                    const newSignUpData = signUpData.map((oldDatum) =>
                      oldDatum.field === signUpDatum.field
                        ? { ...oldDatum, value: event?.target?.value }
                        : oldDatum
                    );

                    setSignUpData(newSignUpData);
                  }}
                  type={signUpDatum?.type}
                />
              </div>
            ))}

            <CheckPasswordContainer>
              <CheckPasswordItem isValid={checkPasswordLength()}>
                {checkPasswordLength() ? (
                  <CheckIcon size={"1rem"} color={color.valid} />
                ) : (
                  <XIcon size={"1rem"} color={color.invalid} />
                )}
                6자리 이상
              </CheckPasswordItem>
              <CheckPasswordItem isValid={checkConfirmPassword()}>
                {checkConfirmPassword() ? (
                  <CheckIcon size={"1rem"} color={color.valid} />
                ) : (
                  <XIcon size={"1rem"} color={color.invalid} />
                )}
                비밀번호 일치함
              </CheckPasswordItem>
            </CheckPasswordContainer>
          </>
        )}

        <SignInButton>로그인</SignInButton>
      </SignInButtonWrapper>
    </Container>
  );
}
