/** @jsxImportSource @emotion/react */

import { ShortSectionItemType, ShortSectionType } from "@/types/resume";

import Input from "../Input/LongInput";
import CreateButton from "../CreateButton";
import { SHORT_SECTION_ITEM_LIST_TEMPLATE } from "../CreateButton/template";
import { divider } from "./styles";

const fields: {
  title: string;
  field: keyof ShortSectionItemType;
  placeholder: string;
}[] = [
  { title: "일자", field: "date", placeholder: "20○○" },
  { title: "역할", field: "position", placeholder: "역할/자격/..." },
  { title: "내용", field: "content", placeholder: "활동/대회/..." },
  { title: "위치", field: "location", placeholder: "위치/주최/..." },
];

export default function ShortSectionRenderer({
  sectionItem,
  setSectionItem,
}: {
  sectionItem: ShortSectionType;
  setSectionItem: (value: ShortSectionType) => void;
}) {
  function onChangeTitle(value: string) {
    setSectionItem({
      ...sectionItem,
      title: value,
    });
  }

  function onChangeListItem(
    value: string,
    index: number,
    field: keyof ShortSectionItemType
  ) {
    const prevItem = {
      ...sectionItem,
    };
    prevItem.itemList[index][field] = value;
    setSectionItem(prevItem);
  }

  function onAddListItem() {
    setSectionItem({
      ...sectionItem,
      itemList: sectionItem.itemList.concat(SHORT_SECTION_ITEM_LIST_TEMPLATE),
    });
  }

  return (
    <div>
      <Input
        title="섹션 이름"
        value={sectionItem.title}
        onChange={onChangeTitle}
        placeholder="섹션 이름을 입력해주세요."
      />

      {sectionItem.itemList.map((item, itemIndex) => (
        <div key={itemIndex}>
          <hr css={divider} />

          {fields.map((field, fieldIndex) => (
            <Input
              key={fieldIndex}
              title={field.title}
              value={item[field.field]}
              onChange={(value: string) =>
                onChangeListItem(value, itemIndex, field.field)
              }
              placeholder={field.placeholder}
            />
          ))}
        </div>
      ))}

      <hr css={divider} />
      <CreateButton type="항목" onClick={onAddListItem} />
    </div>
  );
}
