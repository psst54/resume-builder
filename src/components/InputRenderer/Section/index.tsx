/** @jsxImportSource @emotion/react */

import { ReactElement } from "react";
import {
  SECTION_TITLE_FONT_SIZE,
  container,
  divider,
  titleContainer,
  titleStyle,
} from "./styles";

function SectionTitle({ title, color }: { title: string; color: string }) {
  return (
    <h1 css={titleStyle}>
      <span css={{ fontSize: SECTION_TITLE_FONT_SIZE, color: color }}>
        {title[0]}
      </span>
      {title.substring(1)}
    </h1>
  );
}

export default function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: ReactElement;
}) {
  return (
    <div css={container}>
      <div css={titleContainer}>
        <SectionTitle title={title} color={color} />
        <div css={divider} />
      </div>

      {children}
    </div>
  );
}
