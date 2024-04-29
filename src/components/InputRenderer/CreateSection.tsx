/** @jsxImportSource @emotion/react */

import { Dispatch, SetStateAction } from "react";
import { COLOR } from "@/styles/color";
import { Resume, TextSectionType } from "@/types/resume";

const button = {
  width: "100%",
  padding: "0.5rem",
  background: COLOR.BLACK.STANDARD,

  color: COLOR.WHITE.STANDARD,
  borderRadius: "1rem",
};

export const hoverButton = {
  "&:hover": {
    cursor: "pointer",
    fontWeight: 900,
    background: COLOR.BLACK.HOVER,
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
      css={[button, hoverButton]}
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
