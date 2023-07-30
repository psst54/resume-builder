import react from "react";
import { HexColorPicker } from "react-colorful";
import styled from "@emotion/styled";

import {
  SectionTitleContainer,
  SectionTitle,
  HighlightTitle,
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

const TitleInput = ({
  mainColor,
  resumeTitle,
  setResumeTitle,
}: {
  mainColor: string;
  resumeTitle: string;
  setResumeTitle: Function;
}) => {
  return (
    <>
      <SectionTitleContainer>
        <SectionTitle>
          <HighlightTitle mainColor={mainColor}>이</HighlightTitle>력서 제목
        </SectionTitle>
        <SectionBorder />
      </SectionTitleContainer>

      <InputContainer>
        <InputTitle>제목</InputTitle>
        <LargeInput
          value={resumeTitle}
          placeholder="이력서 제목은 메인 화면에 표시됩니다"
          onChange={(event) => {
            setResumeTitle(event?.target?.value);
          }}
        />
      </InputContainer>
    </>
  );
};

export default TitleInput;
