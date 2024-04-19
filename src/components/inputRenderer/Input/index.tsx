/** @jsxImportSource @emotion/react */

import { defaultInput, inputTitle, inputWrapper, LargeInput } from "./styles";

export default function Input({
  title,
  value,
  onChange,
  placeholder,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div css={inputWrapper}>
      <h2 css={inputTitle}>{title}</h2>
      <input
        css={[defaultInput, LargeInput]}
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
}
