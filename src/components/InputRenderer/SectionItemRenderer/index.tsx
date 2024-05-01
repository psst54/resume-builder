/** @jsxImportSource @emotion/react */
import { SectionItem } from "@/types/resume";
import Input from "../Input/LongInput";
import Textarea from "../Input/Textarea";

export default function SectionItemRenderer({
  sectionItem,
}: {
  sectionItem: SectionItem;
}) {
  switch (sectionItem.type) {
    case "text":
      return (
        <div css={{ display: "flex", flexDirection: "column" }}>
          <Input
            title="섹션 이름"
            value={sectionItem.title}
            onChange={() => {}}
            placeholder="pdf 파일 이름을 입력해주세요."
          />
          <Textarea
            title="내용"
            value={sectionItem.content}
            onChange={() => {}}
            placeholder="내용을 입력해주세요."
          />
        </div>
      );
    case "short":
      return (
        <div>
          {sectionItem.itemList.map((item) => (
            <div key={item.date}>
              <div>{item.date}</div>
              <div>{item.position}</div>
              <div>{item.content}</div>
              <div>{item.location}</div>
            </div>
          ))}
        </div>
      );
    case "long":
      return (
        <div>
          {sectionItem.itemList.map((item) => (
            <div key={item.title}>
              <div>{item.title}</div>
              <div>{item.date.start}</div>
              <div>{item.date.end}</div>
            </div>
          ))}
        </div>
      );

    default:
      return <p>error</p>;
  }
}
