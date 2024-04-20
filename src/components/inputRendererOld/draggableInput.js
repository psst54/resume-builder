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
  data,
  setData,
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

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "contactItems",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({ isDragging: id && id === monitor.getItem()?.id }),
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
            options={selectorData.data}
            data={data}
            setData={setData}
            onChange={selectorData.setFunc}
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
