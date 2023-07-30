/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { color } from "@/app/styles";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;

  padding: 1rem 1rem 0 1rem;
`;

const buttonStyle = {
  background: "transparent",
  padding: "1rem",
  border: "2px solid " + color.gray.standard,
  borderRadius: "0.8rem",

  fontSize: "1rem",
  cursor: "pointer",
};
const importantButton = {
  border: "2px solid " + color.invalid,

  color: color.invalid,
  fontWeight: 500,
};

const A = styled.a`
  background: transparent;
  padding: 1rem;
  border: 2px solid ${color.gray.standard};
  border-radius: 0.8rem;

  font-size: 1rem;
  color: black;
  text-decoration: none;
`;

const InputHeader = ({ url, fileName, saveResume, deleteResume }) => {
  return (
    <Container>
      <button
        css={buttonStyle}
        onClick={() => {
          saveResume();
        }}
      >
        저장하기
      </button>
      <A style={{ padding: "1rem" }} href={url} download={fileName}>
        pdf로 다운로드
      </A>
      <button
        css={[buttonStyle, importantButton]}
        onClick={() => {
          deleteResume();
        }}
      >
        삭제하기
      </button>
    </Container>
  );
};

export default InputHeader;
