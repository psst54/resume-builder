import { Dispatch, SetStateAction } from "react";
import { InputContainer, InputTitle, LargeInput } from "../styles";

const INPUT_TITLE = "Hex Code";
const PLACEHOLDER = "#000000";

export default function HexCode({
  mainColor,
  setMainColor,
}: {
  mainColor: string;
  setMainColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <InputContainer>
      <InputTitle>{INPUT_TITLE}</InputTitle>
      <LargeInput
        value={mainColor}
        placeholder={PLACEHOLDER}
        onChange={(event) => {
          let nextColor = event.target.value;
          if (nextColor.length > 0 && nextColor[0] !== "#") {
            nextColor = "#" + nextColor;
          }
          setMainColor(nextColor);
        }}
      />
    </InputContainer>
  );
}
