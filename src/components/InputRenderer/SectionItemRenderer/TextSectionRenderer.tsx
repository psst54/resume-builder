/** @jsxImportSource @emotion/react */

import { TextSectionType } from "@/types/resume";
import Input from "../Input/LongInput";
import Textarea from "../Input/Textarea";

export default function TextSectionRenderer({
  sectionItem,
  setSectionItem,
}: {
  sectionItem: TextSectionType;
  setSectionItem: (value: TextSectionType) => void;
}) {
  // [?] 합치는게 나을까?
  function onChangeTitle(value: string) {
    setSectionItem({
      ...sectionItem,
      title: value,
    });
  }

  function onChangeContent(value: string) {
    setSectionItem({
      ...sectionItem,
      content: value,
    });
  }

  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <Input
        title="섹션 이름"
        value={sectionItem.title}
        onChange={onChangeTitle}
        placeholder="섹션 이름을 입력해주세요."
      />
      <Textarea
        title="내용"
        value={sectionItem.content}
        onChange={onChangeContent}
        placeholder="내용을 입력해주세요."
      />
    </div>
  );
}
