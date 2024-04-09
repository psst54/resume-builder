/** @jsxImportSource @emotion/react */

import { useRef, useState } from "react";
import { signup } from "../actions";

import {
  MIN_PASSWORD_LENGTH,
  checkConfirmPassword,
  checkPasswordLength,
} from "@/utils/singUpValidation";
import Form from "./Form";
import { signUpFieldList } from "./fieldData";

export default function SignUpForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [warningMessageList, setWarningMessageList] = useState<string[]>([]);

  const handleChange = () => {
    const passwordValue = formRef.current!.elements["password"].value;
    const confirmPasswordValue =
      formRef.current!.elements["confirmPassword"].value;

    const passwordRules = [
      {
        message: `비밀번호는 ${MIN_PASSWORD_LENGTH}자리 이상이어야 합니다.`,
        check: () => checkPasswordLength(passwordValue),
      },
      {
        message: "비밀번호가 일치하지 않습니다.",
        check: () => checkConfirmPassword(passwordValue, confirmPasswordValue),
      },
    ];

    setWarningMessageList(
      passwordRules.filter((rule) => !rule.check()).map((rule) => rule.message)
    );
  };

  return (
    <Form
      formRef={formRef}
      onChange={handleChange}
      warningMessageList={warningMessageList}
      data={signUpFieldList}
      onSubmit={signup}
      buttonText="회원가입"
    />
  );
}
