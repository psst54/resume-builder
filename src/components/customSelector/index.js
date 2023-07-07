import react from "react";
import {
  Wrapper,
  Box,
  Backdrop,
  OptionWrapper,
  OptionContainer,
  Option,
} from "./styles";

const Selector = ({
  idxObj,
  selected,
  data,
  setData,
  isTitle,
  isDragging,
  mainColor,
}) => {
  const [isOpen, setIsOpen] = react.useState(false);

  const selectedItem = data.filter((datum) => datum.value === selected);

  return (
    <Wrapper isTitle={isTitle}>
      <Box
        onClick={() => {
          if (data) setIsOpen(true);
        }}
        isTitle={isTitle}
        isDragging={isDragging}
        mainColor={mainColor}
      >
        {selectedItem.length !== 0 ? selectedItem[0].title : ""}
        <img
          src="/triangle.svg"
          style={{
            width: "1rem",
            height: "1rem",
            transform: isOpen ? "none" : "rotate(0.5turn)",
          }}
        />
      </Box>

      {isOpen && (
        <OptionWrapper>
          <Backdrop
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <OptionContainer>
            {data.map((datum, datumIndex) => {
              return (
                <Option
                  key={datumIndex}
                  onClick={() => {
                    setData({ idxObj, selectedValue: datum.value });
                    setIsOpen(false);
                  }}
                >
                  {datum.title}
                </Option>
              );
            })}
          </OptionContainer>
        </OptionWrapper>
      )}
    </Wrapper>
  );
};

export default Selector;
