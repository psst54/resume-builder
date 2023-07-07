import react from "react";
import styled from "@emotion/styled";
import { useDrag, useDrop } from "react-dnd";
import { InputContainer, InputTitle, LargeInput } from "./styles";
import Selector from "../customSelector";

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
  cursor: pointer;
`;
const InputContainerTmp = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-end;
  opacity: ${({ opacity }) => opacity};
`;
const ImgWrapper = styled.div`
  display: flex;
  margin-left: 0.5rem;
`;

const Input = ({
  type,
  title,
  value,
  setValue,
  placeholder,
  selectorData,
  onDelete,
  canDrag,
  id,
  index,
  moveCard,
  mainColor,
}) => {
  if (!moveCard)
    return (
      <InputContainerTmp>
        <InputContainer>
          {type === "text" && <InputTitle>{title}</InputTitle>}
          {type === "select" && (
            <Selector
              idxObj={selectorData.idxObj}
              selected={selectorData.selected}
              data={selectorData.data}
              setData={selectorData.setFunc}
              isTitle={true}
            />
          )}

          <LargeInput
            value={value}
            placeholder={placeholder}
            onChange={setValue}
          />
        </InputContainer>

        {onDelete && (
          <ImgWrapper>
            <Img src="/delete.svg" />
          </ImgWrapper>
        )}
      </InputContainerTmp>
    );

  const ref = react.useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "contactItems",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "contactItems",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: id && id === monitor.getItem()?.id,
    }),
  });

  drag(drop(ref));

  return (
    <InputContainerTmp data-handler-id={handlerId}>
      <InputContainer>
        {type === "text" && <InputTitle>{title}</InputTitle>}
        {type === "select" && (
          <Selector
            idxObj={selectorData.idxObj}
            selected={selectorData.selected}
            data={selectorData.data}
            setData={selectorData.setFunc}
            isTitle={true}
            isDragging={isDragging}
            mainColor={mainColor}
          />
        )}

        <LargeInput
          value={value}
          placeholder={placeholder}
          onChange={setValue}
          isDragging={isDragging}
          mainColor={mainColor}
        />
      </InputContainer>

      {(onDelete || canDrag) && (
        <ImgWrapper>
          {onDelete && (
            <Img
              src="/delete.svg"
              onClick={() => {
                onDelete({ idx: index });
              }}
            />
          )}
          {canDrag && <Img src="/drag.svg" ref={ref} />}
        </ImgWrapper>
      )}
    </InputContainerTmp>
  );
};

export default Input;
