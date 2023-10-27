import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  background: transparent;
  border: 1px solid black;
  border-radius: 100%;

  font-size: 1.2rem;

  cursor: pointer;
`;
const PageNumber = styled.p`
  width: 5rem;
  text-align: center;
`;

const CanvasWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-bottom: 2rem;
`;
const Canvas = styled.canvas`
  width: 80%;
  height: calc(80vw / 2 / 210 * 297);
  background: white;

  border: 1px solid #ccc;
  border-radius: 1rem;
`;

const PDFViewer = ({ canvasRef, pageNumber, maxPageNumber, setPageNumber }) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          padding: "0.5rem",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <PageButton
          onClick={() => {
            setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
          }}
        >
          {"<"}
        </PageButton>
        <PageNumber>
          {pageNumber} / {maxPageNumber}
        </PageNumber>
        <PageButton
          onClick={() => {
            setPageNumber(
              pageNumber < maxPageNumber ? pageNumber + 1 : maxPageNumber
            );
          }}
        >
          {">"}
        </PageButton>
      </div>

      <CanvasWrapper>
        <Canvas id="pdf-canvas" ref={canvasRef} />
      </CanvasWrapper>
    </Container>
  );
};

export default PDFViewer;
