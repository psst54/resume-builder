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
  const [warningMessageList, setWarningMessageList] = useState<string[]>(
    getSignUpErrorMessage()
  );

  function getSignUpErrorMessage(password?: string, confirmPassword?: string) {
    const passwordRules = [
      {
        message: `비밀번호는 ${MIN_PASSWORD_LENGTH}자리 이상이어야 합니다.`,
        check: checkPasswordLength,
        args: { password },
      },
      {
        message: "비밀번호가 일치하지 않습니다.",
        check: checkConfirmPassword,
        args: { password, confirmPassword },
      },
    ];

    return passwordRules
      .filter((rule) => !rule.check(rule.args))
      .map((rule) => rule.message);
  }

  function handleChange() {
    const passwordValue = (formRef.current!.elements as any)["password"].value;
    const confirmPasswordValue = (formRef.current!.elements as any)[
      "confirmPassword"
    ].value;

    setWarningMessageList(
      getSignUpErrorMessage(passwordValue, confirmPasswordValue)
    );
  }

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
