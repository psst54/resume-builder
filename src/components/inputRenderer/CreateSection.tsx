/** @jsxImportSource @emotion/react */

import { Dispatch, SetStateAction } from "react";
import { COLOR } from "@/styles/color";
import { Resume, TextSectionType } from "@/types/resume";

const button = {
  width: "100%",
  height: "5rem",
  background: "transparent",

  border: `2px solid ${COLOR.LIGHT_GRAY.STANDARD}`,
  borderRadius: "1rem",

  color: COLOR.GRAY.STANDARD,
  fontSize: "1rem",
  fontWeight: 500,

  "&:hover": {
    cursor: "pointer",
    color: COLOR.GRAY.HOVER,
    fontWeight: 900,
    border: `2px solid ${COLOR.LIGHT_GRAY.HOVER}`,
  },
};

const textSectionTemplate: TextSectionType = {
  id: new Date().getTime().toString(),
  title: "새로운 섹션",
  type: "text",
  content: "",
};

export default function CreateSectionButton({
  data,
  setData,
}: {
  data: Resume;
  setData: Dispatch<SetStateAction<Resume>>;
}) {
  return (
    <button
      css={button}
      onClick={() => {
        setData({
          ...data,
          sectionList: data.sectionList.concat(textSectionTemplate),
        });
      }}
    >
      + 섹션 추가하기
    </button>
  );
}
