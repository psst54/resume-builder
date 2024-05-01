/** @jsxImportSource @emotion/react */

import { ShortSectionItemType, ShortSectionType } from "@/types/resume";
import Input from "../Input/LongInput";
import { COLOR } from "@/styles/color";
import { divider } from "./styles";

export default function ShortSectionRenderer({
  sectionItem,
  setSectionItemData,
}: {
  sectionItem: ShortSectionType;
  setSectionItemData: (value: ShortSectionType) => void;
}) {
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

  return (
    <div>
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

      {sectionItem.itemList.map((item, itemIndex) => (
        <div key={itemIndex}>
          <hr css={divider} />

          {fields.map((field, fieldIndex) => (
            <Input
              key={fieldIndex}
              title={field.title}
              value={item[field.field]}
              onChange={(value: string) => {
                const prevItem = {
                  ...sectionItem,
                };
                prevItem.itemList[itemIndex][field.field] = value;
                setSectionItemData(prevItem);
              }}
              placeholder={field.placeholder}
            />
          ))}
        </div>
      ))}

      <hr css={divider} />
    </div>
  );
}
