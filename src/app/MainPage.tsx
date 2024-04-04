/** @jsxImportSource @emotion/react */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { color } from "@/styles/color";

import { Resume } from "@type/resume";
import { emptyTemplate, basicTemplate } from "@assets/resumeTemplate";
import Header from "@components/Header";
import Card, { resumeCard } from "@/components/Card";
import { createClient } from "@/utils/supabase/client";

const grid = {
  display: "grid",
  gap: "1rem",
  width: "100%",
  gridTemplateColumns: "repeat(auto-fill, minmax(15rem, auto))",

  padding: "2rem",
};
const resetLinkStyle = { textDecoration: "none", color: color.black.standard };

const secondaryCard = {
  background: color.lightGray.standard,
  border: "3px solid " + color.white.standard,
};
const cardTitle = {
  margin: "auto",
  fontSize: "1.2rem",
  wordBreak: "keep-all" as const,
};

export default function Home({ resumeList }) {
  const router = useRouter();

  const makeNewResume = async ({ useTemplate }: { useTemplate: boolean }) => {
    const supabase = createClient();
    const { user } = supabase.auth.getUser();

    try {
      const { data, error } = await supabase
        .from("resume")
        .insert({
          title: useTemplate ? "템플릿으로 시작하기" : "빈 이력서",
          content: useTemplate ? basicTemplate : emptyTemplate,
          uid: user.id,
          modified_at: new Date(),
          main_color: "#003FC7",
        })
        .select()
        .single();

      if (error) throw new Error();
      return data.id;
    } catch (err) {
      alert("새로 이력서를 만들지 못했습니다");
      return null;
    }
  };

  return (
    <div>
      <Header />

      <div
        css={{
          height: "calc(100vh - 4rem)",
          background: color.lightGray.standard,
        }}
      >
        <div css={grid}>
          {resumeList?.map((resumeDatum: Resume, resumeDatumIdx: number) => (
            <Link
              key={resumeDatumIdx}
              href={`/build?resumeId=${resumeDatum?.id}`}
              css={resetLinkStyle}
            >
              <Card data={resumeDatum} />
            </Link>
          ))}
          <button
            css={[resumeCard, secondaryCard]}
            onClick={async () => {
              const id = await makeNewResume({ useTemplate: false });

              if (id) {
                router.push(`/build?resumeId=${id}`);
              }
            }}
          >
            <h2 css={cardTitle}>처음부터 시작하기</h2>
          </button>
          <button
            css={[resumeCard, secondaryCard]}
            onClick={async () => {
              const id = await makeNewResume({ useTemplate: true });

              if (id) {
                router.push(`/build?resumeId=${id}`);
              }
            }}
          >
            <h2 css={cardTitle}>템플릿으로 시작하기</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
