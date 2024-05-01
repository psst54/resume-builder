/** @jsxImportSource @emotion/react */
import { SectionItem } from "@/types/resume";
import TextSectionRenderer from "./TextSectionRenderer";
import ShortSectionRenderer from "./ShortSectionRenderer";
import LongSectionRenderer from "./LongSectionRenderer";

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
        <LongSectionRenderer
          sectionItem={sectionItem}
          setSectionItem={setSectionItem}
        />
      );

    default:
      return <p>error</p>;
  }
}
