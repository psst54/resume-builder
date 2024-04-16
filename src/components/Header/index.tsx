/** @jsxImportSource @emotion/react */
"use client";

import Link from "next/link";

import HomeIcon from "@assets/HomeIcon";
import { container, title } from "./style";
import { COLOR } from "@/styles/color";

export default function Header() {
  return (
    <div css={container}>
      <Link href="/">
        <HomeIcon size="2rem" color={COLOR.BLACK.STANDARD} />
      </Link>
      <h1 css={title}>Resume Builder</h1>

      {/* 로그아웃 버튼 수정하기 */}
      <form action="/auth/signout" method="post">
        <button type="submit">로그아웃</button>
      </form>
    </div>
  );
}
