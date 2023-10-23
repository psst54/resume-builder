/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { color } from "@/app/styles";
import { HEADER_HEIGHT } from "@/styles";

const Container = styled.div`
  position: fixed;
  top: ${HEADER_HEIGHT};
  left: 0;

  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  padding: 1rem 1rem 0 1rem;

  z-index: 12;
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

const ActionPanel = ({ onSave, onDelete, fileUrl, fileName }) => {
  return (
    <Container>
      <button
        css={buttonStyle}
        onClick={() => {
          onSave();
        }}
      >
        저장하기
      </button>
      <A style={{ padding: "1rem" }} href={fileUrl} download={fileName}>
        pdf로 다운로드
      </A>
      <button
        css={[buttonStyle, importantButton]}
        onClick={() => {
          onDelete();
        }}
      >
        삭제하기
      </button>
    </Container>
  );
};

export default ActionPanel;
