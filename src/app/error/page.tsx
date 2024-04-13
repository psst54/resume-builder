/** @jsxImportSource @emotion/react */

"use client";

import { Suspense } from "react";
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

function ErrorMessage() {
  const message = useSearchParams().get("message");

  if (!message) return null;
  return <p>오류 메세지 : {message}</p>;
}

export default function ErrorPage() {
  return (
    <div css={container}>
      <p>오류가 발생했습니다.</p>
      <Suspense>
        <ErrorMessage />
      </Suspense>
      <a href="/">메인 페이지로 돌아가기</a>
    </div>
  );
}
