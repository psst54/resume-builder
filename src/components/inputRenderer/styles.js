import styled from "@emotion/styled";
import { color } from "@/app/styles";

const DefaultInput = styled.input`
  font-size: 1rem;

  border: ${({ isDragging, mainColor }) =>
    isDragging ? `2px solid ${mainColor}` : `1px solid ${color.inputBorder}`};

  border-radius: 0.6rem;
  padding: 0.3rem 1rem;

  ::placeholder {
    color: #ccc;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #ccc;
  }

  ::-ms-input-placeholder {
    color: #ccc;
  }
`;

const Page = styled.div`
  font-size: 1rem;
  line-height: 1.4;

  width: 100%;
  padding: 3rem 10%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 800px) {
    padding: 2rem 1rem;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  width: 100%;

  line-height: 1.2;
`;
const SectionTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  margin-bottom: 0.8rem;
`;
const SectionBorder = styled.div`
  border-bottom: 2px solid ${color.gray.standard};
  flex-grow: 1;
  height: 5px;
`;
const SectionTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 800;
  color: #000;
`;
const SectionIcon = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;

  cursor: pointer;
  ${({ down }) => down && "transform: rotate(0.5turn)"};
`;

const AddSection = styled.button`
  width: 100%;
  height: 5rem;
  background: transparent;
  
  margin-top: 2rem;

  border: 2px solid ${color.lightGray.standard};
  border-radius: 1rem;

  color: ${color.gray.standard};
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${color.gray.standard.hover};
    font-weight: 900;
    border: 2px solid ${color.lightGray.hover};
  }
}
`;
const AddItem = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: transparent;

  border: 2px solid ${color.lightGray.standard};
  border-radius: 0.8rem;

  color: ${color.gray.standard};
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${color.gray.standard.hover};
    font-weight: 900;
    border: 2px solid ${color.lightGray.hover};
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

  width: 100%;

  @media (max-width: 1200px) {
    align-items: flex-start;
    gap: 0.2rem;
    flex-direction: column;
  }
`;

const InputTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;

  display: flex;
  flex-basis: 8rem;
  flex-shrink: 0;
  padding-top: 0.4rem; // 높이 맞추기용

  @media (max-width: 1200px) {
    flex-basis: 0;
  }
`;
const LargeInput = styled(DefaultInput)`
  font-weight: 300;

  width: 100%;
  max-width: 26rem;
`;

const Textarea = styled.textarea`
  font-size: 1rem;

  width: 100%;
  max-width: 26rem;
  height: 6rem;

  border: 1px solid ${color.inputBorder};
  border-radius: 0.6rem;
  padding: 0.3rem 1rem;
`;
const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 26rem;
`;
const DateInput = styled(DefaultInput)`
  width: 0;
  flex-grow: 1;
`;
const DateDivider = styled.p`
  padding: 0 0.5rem;
`;
const CheckBoxWrapper = styled.div`
  flex-basis: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.4rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.2rem;
  height: 1.2rem;
  background: ${({ checked, mainColor }) =>
    checked ? mainColor : "transparent"};

  border: ${({ checked, mainColor }) =>
    checked ? "none" : `2px solid ${mainColor}`};
  border-radius: 0.2rem;
`;
const Check = styled.img`
  width: 1rem;
  height: 1rem;
`;

const SectionItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  border: 2px solid ${color.lightGray.standard};
  border-radius: 0.8rem;

  padding: 1rem;
`;

export {
  Page,
  SectionWrapper,
  SectionTitleContainer,
  SectionBorder,
  SectionTitle,
  SectionIcon,
  AddSection,
  AddItem,
  InputContainer,
  InputTitle,
  LargeInput,
  Textarea,
  DateInputContainer,
  DateInputWrapper,
  DateInput,
  DateDivider,
  CheckBoxWrapper,
  CheckBox,
  Check,
  SectionItemContainer,
};
