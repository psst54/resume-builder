import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;

  padding: 1rem 1rem 0 1rem;
`;

const Button = styled.button`
  background: transparent;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 0.8rem;

  font-size: 1rem;
  cursor: pointer;
`;

const A = styled.a`
  background: transparent;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 0.8rem;

  font-size: 1rem;
  color: black;
  text-decoration: none;
`;

const InputHeader = ({ url, fileName, saveResume }) => {
  return (
    <Container>
      <Button
        onClick={() => {
          saveResume();
        }}
      >
        (미구현) 저장하기
      </Button>
      <A style={{ padding: "1rem" }} href={url} download={fileName}>
        pdf로 다운로드
      </A>
    </Container>
  );
};

export default InputHeader;
