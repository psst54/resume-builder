import react from "react";

import styled from "@emotion/styled";
import { color } from "@/app/styles";
import Input from "./input";

const Wrapper = styled.div`
  width: 100%;
  max-width: 26rem;

  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;

  flex-direction: row;

  @media (max-width: 800px) {
    gap: 0.2rem;
  }
`;
const ItemWrapper = styled.div`
  position: relative;

  width: ${({ isTag, len }) =>
    isTag ? `calc(min(${len * 0.8}rem, 100%))` : "100%"};
  min-width: 7rem;
`;
const ItemInput = styled.input`
  width: ${({ isTag, len }) =>
    isTag ? `calc(min(${len * 0.8}rem, 100%))` : "100%"};
  min-width: 7rem;

  font-size: 1rem;
  background: ${({ isFocused }) =>
    isFocused ? "transparent" : color.lightGray.standard};
  padding: 0.2rem 2rem 0.2rem 1rem;

  border: 2px solid ${color.lightGray.standard};
  border-radius: 0.6rem;

  ${({ isTag }) => (isTag ? "" : "justify-content: space-between;")}
`;

const DeleteTagItemButton = styled.img`
  position: absolute;
  right: 0.4rem;
  top: 0.2rem;

  width: 1.5rem;
  height: 1.5rem;
  background: transparent;

  border: none;
  padding: 0.2rem;

  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

const AddButton = styled.button`
  font-size: 1rem;
  background: transparent;
  padding: 0.2rem 1rem;

  border: 2px solid ${color.lightGray.standard};
  border-radius: 0.6rem;

  &:hover {
    cursor: pointer;
  }
`;

const DescItems = ({
  data,
  setData,
  descItem,
  idxObj,
  onAddDescItem,
  onDeleteDescItem,
  onChangeDescItem,
  onChangeDescLink,
}) => {
  const type = descItem.type;
  const isTag = type === "tag";

  const [editingIdx, setEditingIdx] = react.useState(undefined);

  if (
    descItem.type === "list" ||
    descItem.type === "tag" ||
    descItem.type === "link"
  )
    return (
      <Wrapper isTag={isTag}>
        {(descItem.type === "tag" || descItem.type === "list") && (
          <>
            {descItem.items?.map((item, itemIdx) => (
              <ItemWrapper len={item.length} isTag={isTag}>
                <ItemInput
                  isTag={isTag}
                  isFocused={editingIdx === itemIdx}
                  value={item}
                  len={item.length}
                  onFocus={() => {
                    setEditingIdx(itemIdx);
                  }}
                  onBlur={() => {
                    setEditingIdx(undefined);
                  }}
                  onChange={(event) => {
                    onChangeDescItem({
                      data,
                      setData,
                      idxObj: {
                        ...idxObj,
                        targetIdx: itemIdx,
                      },
                      value: event.target.value,
                    });
                  }}
                />

                <DeleteTagItemButton
                  src="/deleteLeft.svg"
                  onClick={() => {
                    onDeleteDescItem({
                      data,
                      setData,
                      idxObj: {
                        ...idxObj,
                        targetIdx: itemIdx,
                      },
                    });
                  }}
                />
              </ItemWrapper>
            ))}
            <AddButton
              onClick={() => {
                onAddDescItem({
                  data,
                  setData,
                  idxObj,
                });
              }}
            >
              추가하기
            </AddButton>
          </>
        )}

        {descItem.type === "link" && (
          <>
            <Input
              type="link"
              value={descItem.title}
              placeholder="이력서에 표시될 내용을 입력해주세요"
              setValue={(event) => {
                onChangeDescLink({
                  idxObj: { data, setData, ...idxObj, field: "title" },
                  value: event.target.value,
                });
              }}
            />
            <Input
              type="link"
              value={descItem.url}
              placeholder="페이지의 URL을 입력해주세요"
              setValue={(event) => {
                onChangeDescLink({
                  idxObj: {
                    data,
                    setData,
                    ...idxObj,
                    field: "url",
                  },
                  value: event.target.value,
                });
              }}
            />
          </>
        )}
      </Wrapper>
    );
};

export default DescItems;
