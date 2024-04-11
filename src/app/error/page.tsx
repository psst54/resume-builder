/** @jsxImportSource @emotion/react */

"use client";

import { useSearchParams } from "next/navigation";

const container = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",

  width: "100%",
  minHeight: "100dvh",
};

export default function ErrorPage() {
  const message = useSearchParams().get("message");

  return (
    <div css={container}>
      <p>오류가 발생했습니다.</p>
      {message && <p>오류 메세지 : {message}</p>}
      <a href="/">메인 페이지로 돌아가기</a>
    </div>
  );
}
