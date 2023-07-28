import styled from "@emotion/styled";
import { color } from "@/app/styles";

const Wrapper = styled.div`
  width: ${(props) => (props.isTitle ? "8rem" : "50%")};
  min-width: 8rem;

  @media (min-width: 1200px) {
    max-width: 14rem;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;
  font-weight: 500;

  padding: 0.2rem 1rem;

  border: ${({ isDragging, mainColor }) =>
    isDragging ? `2px solid ${mainColor}` : `1px solid ${color.inputBorder}`};

  border-radius: 0.8rem;

  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;
const Backdrop = styled.div`
  position: fixed;

  background: #3333;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  z-index: 9;
`;

const OptionWrapper = styled.div`
  position: relative;
`;
const OptionContainer = styled.div`
  position: absolute;
  margin-top: 0.2rem;

  border: 2px solid ${color.lightGray.standard};
  border-radius: 0.8rem;
  background: #fff;

  z-index: 10;
`;
const Option = styled.div`
  min-width: 8rem;
  padding: 0.6rem 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

export { Wrapper, Box, Backdrop, OptionWrapper, OptionContainer, Option };
