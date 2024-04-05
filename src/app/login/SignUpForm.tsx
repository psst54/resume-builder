/** @jsxImportSource @emotion/react */

import { signup } from "./actions";
import {
  formWrapper,
  inputBox,
  inputListWrapper,
  submitButton,
} from "./styles";

export default function SignUpForm() {
  const fields = [
    {
      label: "이메일",
      field: "email",
      placeholder: "이메일",
      type: "email",
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
      placeholder: "비밀번호를 다시 입력해주세요",
      type: "password",
    },
  ];

  return (
    <form css={formWrapper}>
      <div css={inputListWrapper}>
        {fields.map((field: any, index: number) => (
          <div key={index}>
            <p>{field.label}</p>
            <input
              value={field.value}
              type={field?.type}
              required
              css={inputBox}
            />
          </div>
        ))}
      </div>

      <button css={submitButton} formAction={signup}>
        회원가입
      </button>
    </form>
  );
}
