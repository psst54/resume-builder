import { useState, Dispatch, SetStateAction } from "react";
import { HexColorPicker } from "react-colorful";
import { InputContainer, InputTitle } from "../styles";
import { Backdrop, ColorPreview } from "./styles";

const INPUT_TITLE = "팔레트";

export default function Palette({
  color,
  setColor,
}: {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <InputContainer>
      <InputTitle>{INPUT_TITLE}</InputTitle>
      <div style={{ position: "relative" }}>
        <ColorPreview
          mainColor={color}
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
              color={color}
              onChange={(res) => {
                setColor(res);
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
