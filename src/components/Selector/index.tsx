/** @jsxImportSource @emotion/react */

import react from "react";
import Image from "next/image";
import {
  backdrop,
  optionItem,
  optionListContainer,
  optionListWrapper,
  selector,
  wrapper,
} from "./styles";

export default function Selector({
  value,
  optionList,
  onChange,
}: {
  value: string;
  optionList: { label: string; value: string }[];
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = react.useState(false);
  const label = optionList.find((option) => option.value === value)?.label;

  return (
    <div css={wrapper}>
      <div
        css={selector}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <p
          css={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            wordBreak: "break-all" as const,
          }}
        >
          {label}
        </p>

        <Image
          width="16"
          height="16"
          src="/triangle.svg"
          alt="open icon"
          style={{
            transform: isOpen ? "none" : "rotate(0.5turn)",
          }}
        />
      </div>

      {isOpen && (
        <div css={optionListWrapper}>
          <div
            css={backdrop}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div css={optionListContainer}>
            {optionList.map((option, optionIndex) => {
              return (
                <p
                  key={optionIndex}
                  css={optionItem}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
