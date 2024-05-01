/** @jsxImportSource @emotion/react */
import { SectionItem } from "@/types/resume";
import TextSectionRenderer from "./TextSectionRenderer";
import ShortSectionRenderer from "./ShortSectionRenderer";

export default function SectionItemRenderer({
  sectionItem,
  setSectionItem,
}: {
  sectionItem: SectionItem;
  setSectionItem: (value: SectionItem) => void;
}) {
  switch (sectionItem.type) {
    case "text":
      return (
        <TextSectionRenderer
          sectionItem={sectionItem}
          setSectionItem={setSectionItem}
        />
      );
    case "short":
      return (
        <ShortSectionRenderer
          sectionItem={sectionItem}
          setSectionItem={setSectionItem}
        />
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
