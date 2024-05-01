/** @jsxImportSource @emotion/react */

import CheckIcon from "@/assets/CheckIcon";
import { checkbox, checkboxWrapper } from "./styles";

export default function CheckBox({
  title,
  value,
  onChange,
}: {
  title: string;
  value: boolean;
  onChange: () => void;
}) {
  return (
    <button css={checkboxWrapper} onClick={onChange}>
      <div css={checkbox(value)}>
        <CheckIcon
          size="0.75rem"
          color={value ? COLOR.WHITE.STANDARD : "transparent"}
        />
      </div>
      <p>{title}</p>
    </button>
  );
}
