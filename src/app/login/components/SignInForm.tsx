/** @jsxImportSource @emotion/react */

import { signin } from "../actions";
import {
  formWrapper,
  inputBox,
  inputListWrapper,
  submitButton,
} from "../styles";

export default function SignInForm() {
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
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

      <button css={submitButton} formAction={signin}>
        로그인
      </button>
    </form>
  );
}
