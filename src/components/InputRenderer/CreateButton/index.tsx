/** @jsxImportSource @emotion/react */

import { button, hoverButton } from "./styles";

export default function CreateButton({
  type,
  onClick,
}: {
  type: string;
  onClick: () => void;
}) {
  return (
    <button css={[button, hoverButton]} onClick={onClick}>
      + {type} 추가하기
    </button>
  );
}
