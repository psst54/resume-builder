/** @jsxImportSource @emotion/react */

import { supabase } from "@libs/supabase";

import { color } from "@/styles/color";
import {
  checkEmail,
  checkPasswordLength,
  checkConfirmPassword,
} from "@libs/singUpValidation";

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
  const signUp = async () => {
    const email = signUpData.find(
      (signUpDatum: any) => signUpDatum.field === "email"
    ).value;
    const password = signUpData.find(
      (signUpDatum: any) => signUpDatum.field === "password"
    ).value;
    const confirmPassword = signUpData.find(
      (signUpDatum: any) => signUpDatum.field === "confirmPassword"
    ).value;

    if (!checkEmail({ email })) {
      alert("이메일 주소가 올바른지 확인해주세요");
      return;
    }

    if (!checkPasswordLength({ password })) {
      alert("비밀번호는 6자리 이상으로 입력해주세요");
      return;
    }

    if (!checkConfirmPassword({ password, confirmPassword })) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      alert(
        "이메일 주소로 인증 메일이 발송되었어요.\n메일을 인증하고 로그인해주세요!"
      );

      if (error) throw new Error("회원가입 실패");
    } catch (e) {
      alert("회원가입에 실패했습니다.\n잠시 뒤에 다시 시도해주세요");
    }
  };

  return (
    <button
      css={buttonStyle}
      onClick={() => {
        signUp();
      }}
    >
      회원가입
    </button>
  );
}
