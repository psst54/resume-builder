/** @jsxImportSource @emotion/react */

import react from "react";
import { HexColorPicker } from "react-colorful";
import styled from "@emotion/styled";

import {
  SectionTitleContainer,
  SectionTitle,
  SectionBorder,
  InputContainer,
  InputTitle,
  LargeInput,
} from "./styles";

const Warning = styled.p`
  color: red;
  font-size: 0.8rem;
`;
const ColorPreview = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  border: 1px solid #ccc;
  border-radius: 0.6rem;

  background: ${({ mainColor }) => mainColor};

  cursor: pointer;
`;
const Backdrop = styled.div`
  position: fixed;

  background: #3333;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  z-index: 9;
`;

const ColorSelector = ({ mainColor, setMainColor }) => {
  const checkIsValidHexCode = ({ color }) => {
    return (
      /^#[0-9A-Fa-f]{3}$/i.test(color) ||
      /^#[0-9A-Fa-f]{4}$/i.test(color) ||
      /^#[0-9A-Fa-f]{6}$/i.test(color) ||
      /^#[0-9A-Fa-f]{8}$/i.test(color)
    );
  };

  const [isOpen, setIsOpen] = react.useState(false);

  return (
    <>
      <SectionTitleContainer>
        <SectionTitle>
          <span css={{ fontSize: "1.2rem", color: mainColor }}>색</span>상 선택
        </SectionTitle>
        <SectionBorder />
      </SectionTitleContainer>

      {!checkIsValidHexCode({ color: mainColor }) && (
        <Warning>
          * 올바른 색상 코드가 아닌 경우, 색상이 나타나지 않을 수 있습니다.
        </Warning>
      )}

      <InputContainer>
        <InputTitle>hex code</InputTitle>
        <LargeInput
          value={mainColor}
          placeholder="Gildong Hong"
          onChange={(event) => {
            let nextColor = event.target.value;
            if (nextColor.length > 0 && nextColor[0] !== "#")
              nextColor = "#" + nextColor;
            setMainColor(nextColor);
          }}
        />
      </InputContainer>

      <InputContainer>
        <InputTitle>팔레트</InputTitle>
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
    </>
  );
};

export default ColorSelector;
