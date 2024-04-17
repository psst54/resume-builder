/** @jsxImportSource @emotion/react */

import { Dispatch, SetStateAction } from "react";

import { SectionTitleContainer, SectionTitle, SectionBorder } from "../styles";
import { Warning } from "./styles";
import HexCode from "./HexCode";
import Palette from "./Palette";

const ColorSelector = ({
  mainColor,
  setMainColor,
}: {
  mainColor: string;
  setMainColor: Dispatch<SetStateAction<string>>;
}) => {
  const checkIsValidHexCode = ({ color }: { color: string }) => {
    return (
      /^#[0-9A-Fa-f]{3}$/i.test(color) ||
      /^#[0-9A-Fa-f]{4}$/i.test(color) ||
      /^#[0-9A-Fa-f]{6}$/i.test(color) ||
      /^#[0-9A-Fa-f]{8}$/i.test(color)
    );
  };

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

      <HexCode mainColor={mainColor} setMainColor={setMainColor} />
      <Palette mainColor={mainColor} setMainColor={setMainColor} />
    </>
  );
};

export default ColorSelector;
