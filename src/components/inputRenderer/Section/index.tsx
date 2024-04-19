/** @jsxImportSource @emotion/react */

import { ReactElement } from "react";
import {
  SECTION_TITLE_FONT_SIZE,
  container,
  divider,
  titleContainer,
  titleStyle,
} from "./styles";

function SectionTitle({
  title,
  mainColor,
}: {
  title: string;
  mainColor: string;
}) {
  return (
    <h1 css={titleStyle}>
      <span css={{ fontSize: SECTION_TITLE_FONT_SIZE, color: mainColor }}>
        {title[0]}
      </span>
      {title.substring(1)}
    </h1>
  );
}

export default function Section({
  title,
  mainColor,
  children,
}: {
  title: string;
  mainColor: string;
  children: ReactElement;
}) {
  return (
    <div css={container}>
      <div css={titleContainer}>
        <SectionTitle title={title} mainColor={mainColor} />
        <div css={divider} />
      </div>

      {children}
    </div>
  );
}
