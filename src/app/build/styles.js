import styled from "@emotion/styled";
import { color } from "@/app/styles";

const Page = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 4rem;

  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 2px solid ${color.lightGray.standard};

  z-index: 11;
`;

const HeaderTtile = styled.h1``;

const Body = styled.div`
  flex-grow: 1;
  display: flex;
`;
const InputContainer = styled.div`
  flex-shrink: 0;

  width: 50%;
  height: calc(100vh - 4rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background: transparent;
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${color.gray.standard};
    width: 0.8rem;
    border-radius: 0.2rem;
  }

  @media (max-width: 800px) {
    width: 100%;

    ::-webkit-scrollbar {
      background: transparent;
      width: 0.6rem;
    }

    ::-webkit-scrollbar-thumb {
      background: ${color.gray.standard};
      width: 0.6rem;
      border-radius: 0.2rem;
    }
  }
`;
const ViewerContainer = styled.div`
  flex-shrink: 0;

  width: 50%;
  height: calc(100vh - 4rem);
  overflow-y: scroll;

  display: flex;

  background: ${color.lightGray.standard};

  ::-webkit-scrollbar {
    background: transparent;
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${color.gray.standard};
    width: 0.8rem;
    border-radius: 0.2rem;
  }

  @media (max-width: 800px) {
    width: 0;
  }
`;

export { Page, Header, HeaderTtile, Body, InputContainer, ViewerContainer };
