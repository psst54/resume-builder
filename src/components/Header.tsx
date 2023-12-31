import Link from "next/link";
import styled from "@emotion/styled";
import { color } from "@/styles/color";
import { HEADER_HEIGHT } from "@/styles";

import HomeIcon from "@assets/HomeIcon";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${HEADER_HEIGHT};
  background-color: #fff;
  padding: 0 2rem;

  border-bottom: 2px solid ${color.lightGray.standard};

  z-index: 11;
`;

const HeaderTtile = styled.h1`
  font-size: 1.24rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <HomeIcon size="2rem" color={color.black.standard} />
      </Link>
      <HeaderTtile>Resume Builder</HeaderTtile>
      <div></div>
    </HeaderContainer>
  );
}
