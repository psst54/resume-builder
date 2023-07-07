import react from "react";

import styled from "@emotion/styled";
import { color } from "@/app/styles";

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
    isFocused ? "transparent" : color.lightGray};
  padding: 0.2rem 2rem 0.2rem 1rem;

  border: 2px solid ${color.lightGray};
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

  border: 2px solid ${color.lightGray};
  border-radius: 0.6rem;

  &:hover {
    cursor: pointer;
  }
`;

const DescItems = ({
  descItem,
  idxObj,
  addDescItem,
  deleteDescItem,
  editDescItem,
}) => {
  const type = descItem.type;
  const isTag = type === "tag";

  const [editingIdx, setEditingIdx] = react.useState(undefined);

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
                  editDescItem({
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
                  deleteDescItem({
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
              addDescItem({
                idxObj,
              });
            }}
          >
            추가하기
          </AddButton>
        </>
      )}

      {descItem.type === "link" && <div>ewfwe</div>}
    </Wrapper>
  );
};

export default DescItems;
