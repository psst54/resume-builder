import styled from "@emotion/styled";
import { COLOR } from "@/styles/color";
import { SIZE } from "@/styles/size";

const DefaultInput = styled.input`
  font-size: 1rem;

  border: ${({
    isDragging,
    mainColor,
  }: {
    isDragging: boolean;
    mainColor: string;
  }) =>
    isDragging ? `2px solid ${mainColor}` : `1px solid ${COLOR.INPUT_BORDER}`};

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

const margin = "2rem";

const Page = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  min-height: 100%;
  padding: 1.5rem 1rem calc(${SIZE.ACTION_PANEL_HEIGHT} + ${margin}) 1rem;
  background: ${COLOR.ULTRA_GRAY.STANDARD};

  font-size: 1rem;
  line-height: 1.4;

  background: @media (max-width: 800px) {
    padding: 1rem 0.5rem calc(${SIZE.ACTION_PANEL_HEIGHT} + ${margin}) 0.5rem;
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
  border-bottom: 2px solid ${COLOR.GRAY.STANDARD};
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
  ${({ down }: { down: boolean }) => down && "transform: rotate(0.5turn)"};
`;

const AddItem = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: transparent;

  border: 2px solid ${COLOR.LIGHT_GRAY.STANDARD};
  border-radius: 0.8rem;

  color: ${COLOR.GRAY.STANDARD};
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${COLOR.GRAY.HOVER};
    font-weight: 900;
    border: 2px solid ${COLOR.LIGHT_GRAY.HOVER};
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
  padding-top: 0.4rem;

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

  border: 1px solid ${COLOR.INPUT_BORDER};
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
  background: ${({
    checked,
    mainColor,
  }: {
    checked: boolean;
    mainColor: string;
  }) => (checked ? mainColor : "transparent")};

  border: ${({ checked, mainColor }: { checked: boolean; mainColor: string }) =>
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

  border: 2px solid ${COLOR.LIGHT_GRAY.STANDARD};
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
