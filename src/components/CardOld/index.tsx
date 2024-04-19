/** @jsxImportSource @emotion/react */

import { getRelativeTime } from "@utils/getRelativeTime";

import { Resume } from "@/types/resumeOld";
import { cardTitle, dateText, resumeCard } from "./styles";

export default function Card({ data }: { data: Resume }) {
  return (
    <div css={resumeCard}>
      <h2 css={cardTitle}>{data.title}</h2>
      <p css={dateText}>마지막 수정 {getRelativeTime(data?.modified_at)}</p>
    </div>
  );
}
