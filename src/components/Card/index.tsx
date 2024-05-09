/** @jsxImportSource @emotion/react */

import { getRelativeTime } from "@utils/getRelativeTime";

import { Resume } from "@/types/resume";
import { cardTitle, dateText, resumeCard } from "./styles";

export default function Card({ data }: { data: Resume }) {
  return (
    <div css={resumeCard}>
      <h2 css={cardTitle}>{data.fileName}</h2>
      <p css={dateText}>마지막 수정 {getRelativeTime(data?.modifiedAt)}</p>
    </div>
  );
}
