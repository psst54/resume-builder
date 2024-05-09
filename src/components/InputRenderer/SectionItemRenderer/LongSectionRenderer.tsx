/** @jsxImportSource @emotion/react */

import { DateItem, LongSectionItemType, LongSectionType } from "@/types/resume";

import Input from "../Input/LongInput";
import CreateButton from "../CreateButton";
import { LONG_SECTION_ITEM_LIST_TEMPLATE } from "../CreateButton/template";
import { divider } from "./styles";
import Textarea from "../Input/Textarea";
import DateInput from "../Input/DateInput";

const fields: {
  title: string;
  field: Exclude<keyof LongSectionItemType, "date">;
  placeholder: string;
}[] = [
  { title: "항목 이름", field: "title", placeholder: "역할/자격/..." },
  { title: "항목 설명", field: "position", placeholder: "역할/자격/..." },
  { title: "위치", field: "location", placeholder: "위치/주최/..." },
];

export default function LongSectionRenderer({
  sectionItem,
  setSectionItem,
}: {
  sectionItem: LongSectionType;
  setSectionItem: (value: LongSectionType) => void;
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
    field: Exclude<keyof LongSectionItemType, "date">
  ) {
    const prevItem = {
      ...sectionItem,
    };
    prevItem.itemList[index][field] = value;
    setSectionItem(prevItem);
  }

  function onChangeListItemDate(value: DateItem, index: number) {
    const prevItem = {
      ...sectionItem,
    };
    prevItem.itemList[index].date = value;
    setSectionItem(prevItem);
  }

  function onAddListItem() {
    setSectionItem({
      ...sectionItem,
      itemList: sectionItem.itemList.concat(LONG_SECTION_ITEM_LIST_TEMPLATE),
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

          <DateInput
            title="기간"
            value={item.date}
            onChange={(value: DateItem) =>
              onChangeListItemDate(value, itemIndex)
            }
          />

          <Textarea
            title={"내용"}
            value={item.content}
            onChange={(value: string) =>
              onChangeListItem(value, itemIndex, "content")
            }
            placeholder={"마크다운 문법으로 작성할 수 있어요."}
          />
        </div>
      ))}

      <hr css={divider} />
      <CreateButton type="항목" onClick={onAddListItem} />
    </div>
  );
}
