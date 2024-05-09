/** @jsxImportSource @emotion/react */
import { SectionItem } from "@/types/resume";
import TextSectionRenderer from "./TextSectionRenderer";
import ShortSectionRenderer from "./ShortSectionRenderer";
import LongSectionRenderer from "./LongSectionRenderer";
import Selector from "@/components/Selector";
import {
  LONG_SECTION_TEMPLATE,
  SHORT_SECTION_TEMPLATE,
  TEXT_SECTION_TEMPLATE,
} from "../CreateButton/template";

function render(
  sectionItem: SectionItem,
  setSectionItem: (value: SectionItem) => void
) {
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

export default function SectionItemRenderer({
  sectionItem,
  setSectionItem,
}: {
  sectionItem: SectionItem;
  setSectionItem: (value: SectionItem) => void;
}) {
  const sectionOptions = [
    { label: "텍스트", value: "text", template: TEXT_SECTION_TEMPLATE },
    { label: "간단", value: "short", template: SHORT_SECTION_TEMPLATE },
    { label: "상세", value: "long", template: LONG_SECTION_TEMPLATE },
  ];

  return (
    <>
      <Selector
        value={sectionItem.type}
        optionList={sectionOptions.map((datum) => ({
          label: datum.label,
          value: datum.value,
        }))}
        onChange={(value: string) => {
          setSectionItem(
            sectionOptions.find((option) => option.value === value)!.template
          );
        }}
      />
      {render(sectionItem, setSectionItem)}
    </>
  );
}
