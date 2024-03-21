import { useState, Dispatch, SetStateAction } from "react";
import { HexColorPicker } from "react-colorful";
import { InputContainer, InputTitle } from "../styles";
import { Backdrop, ColorPreview } from "./styles";

const INPUT_TITLE = "팔레트";

export default function Palette({
  mainColor,
  setMainColor,
}: {
  mainColor: string;
  setMainColor: Dispatch<SetStateAction<string>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <InputContainer>
      <InputTitle>{INPUT_TITLE}</InputTitle>
      <div style={{ position: "relative" }}>
        <ColorPreview
          mainColor={mainColor}
          onClick={() => {
            setIsOpen(true);
          }}
        />

        {isOpen && (
          <>
            <Backdrop
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <HexColorPicker
              color={mainColor}
              onChange={(res) => {
                setMainColor(res);
              }}
              style={{
                position: "absolute",
                zIndex: 10,
                top: 0,
                left: "3rem",
              }}
            />
          </>
        )}
      </div>
    </InputContainer>
  );
}
