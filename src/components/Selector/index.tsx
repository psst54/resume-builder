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
  selected,
  options,
  data,
  setData,
  onChange,
  isTitle,
  isDragging,
  mainColor,
}) => {
  const [isOpen, setIsOpen] = react.useState(false);

  const selectedItem = options.find((option) => option.value === selected);

  return (
    <Wrapper isTitle={isTitle}>
      <Box
        onClick={() => {
          if (options) setIsOpen(true);
        }}
        isTitle={isTitle}
        isDragging={isDragging}
        mainColor={mainColor}
      >
        {selectedItem ? selectedItem.title : ""}
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
            {options.map((option, optionIndex) => {
              return (
                <Option
                  key={optionIndex}
                  onClick={() => {
                    onChange({
                      data,
                      setData,
                      idxObj,
                      selectedValue: option.value,
                    });
                    setIsOpen(false);
                  }}
                >
                  {option.title}
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
