/** @jsxImportSource @emotion/react */

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import type { Resume } from "@type/resume";

import { createResume } from "@/utils/supabase/createResume";
import Header from "@components/Header";
import Card from "@/components/Card";
import {
  cardTitle,
  container,
  grid,
  resetLinkStyle,
  secondaryCard,
} from "./style";
import { createClient } from "@/utils/supabase/client";
import { resumeCard } from "@/components/Card/styles";

const newResumeOptions = [
  { useTemplate: false, buttonTitle: "처음부터 시작하기" },
  { useTemplate: true, buttonTitle: "템플릿으로 시작하기" },
];

export default function OldScreen({ resumeList }: { resumeList: Resume[] }) {
  const router = useRouter();

  return (
    <div css={container}>
      <Header />

      <div css={grid}>
        {resumeList?.map((resumeDatum: Resume, resumeDatumIdx: number) => (
          <Link
            key={resumeDatumIdx}
            href={`/old/build?resumeId=${resumeDatum?.id}`}
            css={resetLinkStyle}
          >
            <Card data={resumeDatum} />
          </Link>
        ))}

        {newResumeOptions.map((option) => (
          <button
            css={[resumeCard, secondaryCard]}
            onClick={async () => {
              const id = await createResume(createClient, option.useTemplate);

              if (id) {
                router.refresh();
                router.push(`/old/build?resumeId=${id}`);
              }
            }}
          >
            <h2 css={cardTitle}>{option.buttonTitle}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}
