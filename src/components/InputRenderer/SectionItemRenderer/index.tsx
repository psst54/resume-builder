/** @jsxImportSource @emotion/react */
import { SectionItem } from "@/types/resume";
import TextSectionRenderer from "./TextSectionRenderer";

export default function SectionItemRenderer({
  sectionItem,
  setSectionItemData,
}: {
  sectionItem: SectionItem;
  setSectionItemData: (value: SectionItem) => void;
}) {
  switch (sectionItem.type) {
    case "text":
      return (
        <TextSectionRenderer
          sectionItem={sectionItem}
          setSectionItemData={setSectionItemData}
        />
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
