/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { color } from "@/styles/color";

import SaveIcon from "@/assets/SaveIcon";
import DownloadIcon from "@/assets/DownloadIcon";
import DeleteIcon from "@/assets/DeleteIcon";

const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 0;
  margin-right: 1rem;

  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  padding: 1rem 1rem 0 1rem;
  z-index: 12;
`;

const buttonStyle = {
  background: color.black.standard,
  width: "3rem",
  height: "3rem",

  border: "2px solid " + color.black.standard,
  borderRadius: "100%",

  cursor: "pointer",
};
const importantButton = {
  background: color.invalid,
  border: "2px solid " + color.invalid,

  color: color.invalid,
  fontWeight: 500,
};

const A = styled.a`
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
        <SaveIcon size="1.5rem" color={color.white.standard} />
      </button>
      <button css={buttonStyle}>
        <A href={fileUrl} download={fileName}>
          <DownloadIcon size="1.5rem" color={color.white.standard} />
        </A>
      </button>
      <button
        css={[buttonStyle, importantButton]}
        onClick={() => {
          onDelete();
        }}
      >
        <DeleteIcon size="1.5rem" color={color.white.standard} />
      </button>
    </Container>
  );
};

export default ActionPanel;
