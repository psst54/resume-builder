/** @jsxImportSource @emotion/react */

import {
  SectionTitleContainer,
  SectionTitle,
  SectionBorder,
  InputContainer,
  InputTitle,
  LargeInput,
} from "./styles";

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
          <span css={{ fontSize: "1.2rem", color: mainColor }}>이</span>
          력서 제목
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
