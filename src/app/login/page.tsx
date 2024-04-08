/** @jsxImportSource @emotion/react */
"use client";

import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";
import { container, title, pageSizeAlert, formContainer } from "./styles";

export default function Page() {
  return (
    <div css={container}>
      <div>
        <h1 css={title}>Awesome Resume Builder</h1>
        <p css={pageSizeAlert}>
          * PC 혹은 충분히 넓은 화면에서 사용하시는 것을 추천드려요!
        </p>
      </div>

      <div css={formContainer}>
        <Tabs>
          <Tab label="로그인">
            <SignInForm />
          </Tab>
          <Tab label="회원가입">
            <SignUpForm />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
