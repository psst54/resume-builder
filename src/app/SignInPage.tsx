/** @jsxImportSource @emotion/react */
"use client";
import { useState } from "react";
import styled from "@emotion/styled";

import { color } from "@/styles/color";
import { size } from "@/styles/size";
import CheckIcon from "@assets/CheckIcon";
import XIcon from "@assets//XIcon";

import SignInButton from "@components/SignInButton";
import SignUpButton from "@components/SignUpButton";

import {
  checkPasswordLength,
  checkConfirmPassword,
} from "@utils/singUpValidation";

const breakpoints = [768];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

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

const signInData = [
  { label: "이메일", field: "email", placeholder: "" },
  {
    label: "비밀번호",
    field: "password",

    placeholder: "",
    type: "password",
  },
];

const signUpData = [
  {
    label: "이메일",
    field: "email",
    placeholder: "sample@example.com",
  },
  {
    label: "비밀번호",
    field: "password",
    placeholder: "6자리 이상",
    type: "password",
  },
  {
    label: "비밀번호 확인",
    field: "confirmPassword",
    placeholder: "비밀번호를 다시 입력주세요",
    type: "password",
  },
];

export default function Home() {
  const [isSignIn, setIsSignIn] = useState(true);

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <Container>
      <SignInButtonWrapper>
        {isSignIn && (
          <>
            {signInData.map((signInDatum: any, signInDatumIdx: number) => (
              <div css={InputContainer} key={signInDatumIdx}>
                {signInDatum.label}
                <input
                  css={Input}
                  value={signInDatum.value}
                  onChange={(event) => {
                    const newInputData = { ...inputData };
                    newInputData[
                      signInDatum.field as
                        | "email"
                        | "password"
                        | "confirmPassword"
                    ] = event.target.value;
                    setInputData(newInputData);
                  }}
                  type={signInDatum?.type}
                />
              </div>
            ))}

            <SignInButton inputData={inputData} />
          </>
        )}

        {!isSignIn && (
          <>
            {signUpData.map((signUpDatum: any, signUpDatumIdx: number) => (
              <div css={InputContainer} key={signUpDatumIdx}>
                {signUpDatum.label}
                <input
                  css={Input}
                  value={signUpDatum.value}
                  onChange={(event) => {
                    const newInputData = { ...inputData };
                    newInputData[
                      signUpDatum.field as
                        | "email"
                        | "password"
                        | "confirmPassword"
                    ] = event.target.value;
                    setInputData(newInputData);
                  }}
                  type={signUpDatum?.type}
                />
              </div>
            ))}

            <CheckPasswordContainer>
              <div
                css={{
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "center",

                  marginLeft: "1rem",

                  color: checkPasswordLength({
                    password: inputData.password,
                  })
                    ? color.valid
                    : color.invalid,
                }}
              >
                {checkPasswordLength({
                  password: inputData.password,
                }) ? (
                  <CheckIcon size={size.icon.small} color={color.valid} />
                ) : (
                  <XIcon size={size.icon.small} color={color.invalid} />
                )}
                6자리 이상
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "center",

                  marginLeft: "1rem",

                  color: checkConfirmPassword({
                    password: inputData.password,
                    confirmPassword: inputData.confirmPassword,
                  })
                    ? color.valid
                    : color.invalid,
                }}
              >
                {checkConfirmPassword({
                  password: inputData.password,
                  confirmPassword: inputData.confirmPassword,
                }) ? (
                  <CheckIcon size={size.icon.small} color={color.valid} />
                ) : (
                  <XIcon size={size.icon.small} color={color.invalid} />
                )}
                비밀번호 일치함
              </div>
            </CheckPasswordContainer>

            <SignUpButton inputData={inputData} />
          </>
        )}
      </SignInButtonWrapper>
    </Container>
  );
}
