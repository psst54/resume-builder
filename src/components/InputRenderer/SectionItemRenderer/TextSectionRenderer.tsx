/** @jsxImportSource @emotion/react */

import { TextSectionType } from "@/types/resume";
import Input from "../Input/LongInput";
import Textarea from "../Input/Textarea";

export default function TextSectionRenderer({
  sectionItem,
  setSectionItemData,
}: {
  sectionItem: TextSectionType;
  setSectionItemData: (value: TextSectionType) => void;
}) {
  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <Input
        title="섹션 이름"
        value={sectionItem.title}
        onChange={(value: string) => {
          setSectionItemData({
            ...sectionItem,
            title: value,
          });
        }}
        placeholder="섹션 이름을 입력해주세요."
      />
      <Textarea
        title="내용"
        value={sectionItem.content}
        onChange={(value: string) => {
          setSectionItemData({
            ...sectionItem,
            content: value,
          });
        }}
        placeholder="내용을 입력해주세요."
      />
    </div>
  );
}
