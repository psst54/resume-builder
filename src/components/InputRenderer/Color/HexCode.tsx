import { Dispatch, SetStateAction } from "react";
import Input from "../Input/LongInput";

const INPUT_TITLE = "Hex Code";
const PLACEHOLDER = "#000000";

export default function HexCode({
  color,
  setColor,
}: {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Input
      title={INPUT_TITLE}
      value={color}
      onChange={setColor}
      placeholder={PLACEHOLDER}
    />
  );
}
