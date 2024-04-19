/** @jsxImportSource @emotion/react */

import { COLOR } from "@/styles/color";
import { Dispatch, SetStateAction } from "react";

const inputWrapper = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "flex-start",

  width: "100%",

  ["@media (max-width: 1200px)"]: {
    gap: "0.2rem",
    flexDirection: "column" as const,
  },
};

const inputTitle = {
  fontSize: "1.2rem",
  fontWeight: 400,

  display: "flex",
  flexBasis: "8rem",
  flexShrink: 0,
  paddingTop: "0.4rem",

  ["@media (max-width: 1200px)"]: {
    flexBasis: 0,
  },
};

const defaultInput = {
  fontSize: "1rem",

  border: `1px solid ${COLOR.INPUT_BORDER}`,

  borderRadius: "0.6rem",
  padding: "0.3rem 1rem",

  "::placeholder": {
    color: "#ccc",
    opacity: 1,
  },

  ":-ms-input-placeholder": {
    color: "#ccc",
  },

  "::-ms-input-placeholder": {
    color: "#ccc",
  },
};

const LargeInput = {
  fontWeight: 300,

  width: "100%",
  maxWidth: "26rem",
};

export default function FileName({
  resumeFileName,
  setResumeFileName,
}: {
  resumeFileName: string;
  setResumeFileName: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div css={inputWrapper}>
      <h2 css={inputTitle}>파일 이름</h2>
      <input
        css={[defaultInput, LargeInput]}
        value={resumeFileName}
        placeholder="저장될 pdf 파일 이름을 입력해주세요"
        onChange={(event) => {
          setResumeFileName(event?.target?.value);
        }}
      />
    </div>
  );
}
