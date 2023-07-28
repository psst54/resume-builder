"use client";
import react from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
`;
const SignInButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const SignInButton = styled.button`
  width: 30vw;
  height: 30vw;
  background: teal;
`;

export default function Home() {
  return (
    <Container>
      <SignInButtonWrapper>
        <SignInButton>로그인</SignInButton>
        <SignInButton>가입하기</SignInButton>
      </SignInButtonWrapper>
    </Container>
  );
}
