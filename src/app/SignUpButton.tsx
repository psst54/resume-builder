/** @jsxImportSource @emotion/react */

import { color } from "@/app/styles";

const buttonStyle = {
  width: "18rem",
  height: "3rem",
  marginTop: "2rem",

  background: color.primary.standard,
  color: color.white.standard,
  fontWeight: 500,

  border: "none",
  borderRadius: "1rem",

  cursor: "pointer",

  "&:active": {
    background: color.primary.active,
  },
};

export default function SignUpButton({ signUpData }: { signUpData: any }) {
  const singUp = () => {
    alert("ewfwef");
  };

  return (
    <button
      css={buttonStyle}
      onClick={() => {
        singUp();
      }}
    >
      회원가입
    </button>
  );
}
