/** @jsxImportSource @emotion/react */

import { signUp } from "@utils/signUp";
import { buttonStyle } from "@/styles/signInButton";
import { InputData } from "@/app/page";

export default function SignUpButton({ inputData }: { inputData: InputData }) {
  return (
    <button
      css={buttonStyle}
      onClick={() => {
        signUp(inputData);
      }}
    >
      회원가입
    </button>
  );
}
