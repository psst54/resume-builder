/** @jsxImportSource @emotion/react */
"use client";
import react from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { color } from "@/styles/color";
// import { useAppSelector } from "@/redux/hooks";

import { supabase } from "@libs/supabase";

import { Resume } from "@type/resume";
import { emptyTemplate, basicTemplate } from "@assets/resumeTemplate";
import Header from "@components/Header";
import Card, { resumeCard } from "@/components/Card";

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

export default function Home() {
  const [resumeData, setResumenData] = react.useState<Resume[] | null>(null);
  // const uid = useAppSelector((state) => state.userReducer.resume_builder_id);
  const uid = "1";
  const router = useRouter();

  const getResumes = async () => {
    try {
      const { data, error } = await supabase
        .from("resume")
        .select()
        .order("modified_at", { ascending: false });

      if (error) throw new Error();

      return data;
    } catch (err) {
      alert("데이터를 불러오지 못했습니다");
      return null;
    }
  };

  const makeNewResume = async ({ useTemplate }: { useTemplate: boolean }) => {
    try {
      const { data, error } = await supabase
        .from("resume")
        .insert({
          title: useTemplate ? "템플릿으로 시작하기" : "빈 이력서",
          content: useTemplate ? basicTemplate : emptyTemplate,
          uid: uid,
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

  react.useEffect(() => {
    getResumes().then((res: Resume[] | null) => {
      if (res) setResumenData(res);
    });
  }, []);

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
          {resumeData?.map((resumeDatum: Resume, resumeDatumIdx: number) => (
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
