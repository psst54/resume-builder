/** @jsxImportSource @emotion/react */
import { SectionItem } from "@/types/resume";
import TextSectionRenderer from "./TextSectionRenderer";
import ShortSectionRenderer from "./ShortSectionRenderer";

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
        <ShortSectionRenderer
          sectionItem={sectionItem}
          setSectionItemData={setSectionItemData}
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
