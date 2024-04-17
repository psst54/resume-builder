export interface Field {
  label: string;
  field: string;
  placeholder: string;
  type: string;
  autoComplete?: string;
  minLength?: number;
}

export const signInFieldList: Field[] = [
  {
    label: "이메일",
    field: "email",
    placeholder: "이메일",
    type: "email",
    autoComplete: "email",
  },
  {
    label: "비밀번호",
    field: "password",
    placeholder: "6자리 이상",
    type: "password",
    autoComplete: "current-password",
    minLength: 6,
  },
];

export const signUpFieldList: Field[] = [
  {
    label: "이메일",
    field: "email",
    placeholder: "이메일",
    type: "email",
    autoComplete: "email",
  },
  {
    label: "비밀번호",
    field: "password",
    placeholder: "6자리 이상",
    type: "password",
    autoComplete: "new-password",
    minLength: 6,
  },
  {
    label: "비밀번호 확인",
    field: "confirmPassword",
    placeholder: "비밀번호를 다시 입력해주세요",
    type: "password",
    autoComplete: "new-password",
    minLength: 6,
  },
];
