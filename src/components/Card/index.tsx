/** @jsxImportSource @emotion/react */

import { getRelativeTime } from "@utils/getRelativeTime";
import { COLOR } from "@/styles/color";
import { Resume } from "@/types/resume";

export const resumeCard = {
  display: "flex",
  flexDirection: "column" as const,

  width: "100%",
  height: "10rem",
  padding: "2rem 3rem",
  background: COLOR.white.STANDARD,
  border: "none",
  borderRadius: "1.2rem",

  cursor: "pointer",
};

const cardTitle = {
  fontSize: "1.2rem",
  wordBreak: "keep-all" as const,
  textAlign: "left" as const,
};
const dateText = { color: COLOR.GRAY.STANDARD };

export default function Card({ data }: { data: Resume }) {
  return (
    <div css={resumeCard}>
      <h2 css={cardTitle}>{data.title}</h2>
      <p css={dateText}>마지막 수정 {getRelativeTime(data?.modified_at)}</p>
    </div>
  );
}
