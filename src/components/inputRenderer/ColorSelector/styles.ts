import styled from "@emotion/styled";

export const Warning = styled.p`
  color: red;
  font-size: 0.8rem;
`;
export const ColorPreview = styled.div<{ mainColor: string }>`
  width: 2.4rem;
  height: 2.4rem;

  border: 1px solid #ccc;
  border-radius: 0.6rem;

  background: ${({ mainColor }) => mainColor};

  cursor: pointer;
`;
export const Backdrop = styled.div`
  position: fixed;

  background: #3333;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  z-index: 9;
`;
