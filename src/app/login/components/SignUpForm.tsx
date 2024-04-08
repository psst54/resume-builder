/** @jsxImportSource @emotion/react */

import { useRef, useState } from "react";
import { signup } from "../actions";
import {
  formWrapper,
  inputBox,
  inputListWrapper,
  submitButton,
} from "../styles";
import { color } from "@/styles/color";

const MIN_PASSWORD_LENGTH = 6;

interface Field {
  label: string;
  field: string;
  placeholder: string;
  type: string;
}

const warngingMessage = {
  color: color.invalid,
  fontSize: "0.8rem",
};

export default function SignUpForm() {
  const fields: Field[] = [
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

  const formRef = useRef<HTMLFormElement>(null);

  const [warningMessageList, setWarningMessageList] = useState<string[]>([]);

  const handleChange = () => {
    const passwordValue = formRef.current!.elements["password"].value;
    const confirmPasswordValue =
      formRef.current!.elements["confirmPassword"].value;

    const passwordRules = [
      {
        message: "비밀번호는 6자리 이상이어야 합니다.",
        check: () => passwordValue.length < MIN_PASSWORD_LENGTH,
      },
      {
        message: "비밀번호가 일치하지 않습니다.",
        check: () => passwordValue !== confirmPasswordValue,
      },
    ];

    setWarningMessageList(
      passwordRules.filter((rule) => rule.check()).map((rule) => rule.message)
    );
  };

  return (
    <form css={formWrapper} ref={formRef}>
      <div css={inputListWrapper}>
        {fields.map((field: Field, index: number) => (
          <div key={index}>
            <p>{field.label}</p>
            <input
              id={field.field}
              type={field?.type}
              required
              css={inputBox}
              onChange={() => handleChange()}
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

      {setWarningMessageList.length && (
        <div>
          {warningMessageList.map((message, index) => (
            <p key={index} css={warngingMessage}>
              {message}
            </p>
          ))}
        </div>
      )}

      <button css={submitButton} formAction={signup}>
        회원가입
      </button>
    </form>
  );
}
