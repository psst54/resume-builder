/** @jsxImportSource @emotion/react */

import { DateItem } from "@/types/resume";
import { defaultInput, inputTitle, inputWrapper, smallInput } from "./styles";
import CheckBox from "./CheckBox";

export default function DateInput({
  title,
  value,
  onChange,
  placeholder,
}: {
  title: string;
  value: DateItem;
  onChange: (value: DateItem) => void;
  placeholder?: string;
}) {
  return (
    <div css={[inputWrapper]}>
      <h2 css={inputTitle}>{title}</h2>

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <input
            css={[defaultInput, smallInput]}
            value={value.start}
            placeholder={placeholder}
            onChange={(event) => {
              onChange({ ...value, start: event.target.value });
            }}
          />
          {value.useEnd && (
            <>
              <p>~</p>
              <input
                css={[defaultInput, smallInput]}
                value={value.end}
                placeholder={placeholder}
                onChange={(event) => {
                  onChange({ ...value, end: event.target.value });
                }}
                disabled={value.useCurrent}
              />
            </>
          )}
        </div>

        <div
          css={{
            display: "flex",
            columnGap: "1rem",
            rowGap: "0.25rem",
            flexWrap: "wrap",
          }}
        >
          <CheckBox
            title="종료 날짜 보이기"
            value={value.useEnd}
            onChange={() => {
              onChange({ ...value, useEnd: !value.useEnd });
            }}
          />
          <CheckBox
            title="진행중"
            value={value.useCurrent}
            onChange={() => {
              onChange({ ...value, useCurrent: !value.useCurrent });
            }}
          />
          {/* <CheckBox
            title="기간 보이기"
            value={value.useDuration}
            onChange={() => {
              onChange({ ...value, useDuration: !value.useDuration });
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
