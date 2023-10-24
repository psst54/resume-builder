import react from "react";
import styled from "@emotion/styled";
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
}) => {
  return (
    <InputContainerTmp>
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
};

export default Input;
