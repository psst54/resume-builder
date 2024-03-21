/** @jsxImportSource @emotion/react */

import { signUp } from "@/app/utils/signUp";
import { buttonStyle } from "@/styles/signInButton";

export default function SignUpButton({ inputData }: { inputData: any }) {
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
