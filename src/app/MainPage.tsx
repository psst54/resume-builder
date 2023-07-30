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
const supabase = createClient(supabaseUrl, supabaseKey);

import { emptyTemplate } from "@assets/resumeTemplate";

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
  const [resumeData, setResumenData] = react.useState([]);
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
    }
  };

  const makeNewResume = async ({ useTemplate }: { useTemplate: boolean }) => {
    try {
      const { data, error } = await supabase
        .from("resume")
        .insert({
          title: "새 이력서",
          content: emptyTemplate,
          uid: uid,
          modified_at: new Date(),
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
    getResumes().then((res) => setResumenData(res));
  }, []);

  const timeForToday = (value) => {
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
    <div
      css={{
        display: "grid",
        gap: "1rem",
        width: "100%",
        gridTemplateColumns: "repeat(auto-fit, minmax(15rem, auto))",
      }}
    >
      {resumeData.map((resumeDatum, resumeDatumIdx) => (
        <Link
          href={`/build/${resumeDatum?.id}`}
          css={{ width: "100%", textDecoration: "none" }}
        >
          <button css={resumeCard} key={resumeDatumIdx}>
            <h2 css={{ fontSize: "1.2rem", wordBreak: "keep-all" }}>
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
            router.push(`/build/${id}`);
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
            router.push(`/build/${id}`);
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
  );
}
