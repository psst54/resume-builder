/** @jsxImportSource @emotion/react */
"use client";
import react from "react";
import styled from "@emotion/styled";

import { color } from "@/app/styles";
import CheckIcon from "@assets/CheckIcon";
import XIcon from "@assets//XIcon";

import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

const breakpoints = [768];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  padding-top: 10vh;

  background: ${color.lightGray.standard};
`;
const SignInButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  width: fit-content;
  height: fit-content;
  padding: 1rem 3rem 3rem 3rem;
  background: ${color.white.standard};

  border-radius: 1rem;
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
      <div>
        <h1 css={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Awesome Resume Builder
        </h1>
        <p
          css={{
            width: "fit-content",
            marginBottom: "2rem",

            color: color.primary.standard,
            fontSize: "1.2rem",
            fontWeight: 800,
            wordBreak: "keep-all",

            [mq[0]]: {
              display: "none",
            },
          }}
        >
          * PC 혹은 충분히 넓은 화면에서 사용하시는 것을 추천드려요!
        </p>
      </div>

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

            <SignInButton signInData={signInData} />
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

            <SignUpButton signUpData={signUpData} />
          </>
        )}
      </SignInButtonWrapper>
    </Container>
  );
}
