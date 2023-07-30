/** @jsxImportSource @emotion/react */
"use client";
import react from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { color } from "@/app/styles";
import { useAppSelector } from "@/redux/hooks";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(
  supabaseUrl ? supabaseUrl : "",
  supabaseKey ? supabaseKey : ""
);

import { Resume } from "@type/resume";
import { emptyTemplate, basicTemplate } from "@assets/resumeTemplate";
import Header from "@components/Header";

const resumeCard = {
  display: "flex",
  flexDirection: "column" as "column",

  width: "100%",
  height: "10rem",
  padding: "2rem 3rem",
  background: color.white.standard,
  border: "none",
  borderRadius: "1.2rem",

  cursor: "pointer",
};
const secondaryCard = {
  background: color.lightGray.standard,
  border: "3px solid " + color.white.standard,
};

export default function Home() {
  const [resumeData, setResumenData] = react.useState<Resume[] | null>(null);
  const uid = useAppSelector((state) => state.userReducer.resume_builder_id);
  const router = useRouter();

  const getResumes = async () => {
    try {
      const { data, error } = await supabase
        .from("resume")
        .select()
        .eq("uid", uid)
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
        .select();

      if (error) throw new Error();

      return data[0].id;
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

  const timeForToday = (value: Date) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금 전";
    if (betweenTime < 60) {
      return `${betweenTime} 분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour} 시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay} 일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)} 년 전`;
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
        <div
          css={{
            display: "grid",
            gap: "1rem",
            width: "100%",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, auto))",

            padding: "2rem",
          }}
        >
          {resumeData?.map((resumeDatum: Resume, resumeDatumIdx: number) => (
            <Link
              key={resumeDatumIdx}
              href={`/build?resumeId=${resumeDatum?.id}`}
              css={{ width: "100%", textDecoration: "none" }}
            >
              <button css={resumeCard}>
                <h2
                  css={{
                    fontSize: "1.2rem",
                    wordBreak: "keep-all",
                    textAlign: "left",
                  }}
                >
                  {resumeDatum?.title}
                </h2>
                <p css={{ color: color.gray.standard }}>
                  마지막 수정 {timeForToday(resumeDatum?.modified_at)}
                </p>
              </button>
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
            <h2
              css={{
                margin: "auto",
                fontSize: "1.2rem",
                wordBreak: "keep-all",
              }}
            >
              처음부터 시작하기
            </h2>
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
            <h2
              css={{
                margin: "auto",
                fontSize: "1.2rem",
                wordBreak: "keep-all",
              }}
            >
              템플릿으로 시작하기
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
}
