import { COLOR } from "@/styles/color";

import { SupabaseClient } from "@supabase/supabase-js";
import { RESUME_TABLE } from "./constant";
import { SectionItem } from "@/types/resume";

const BASIC_SECTION_LIST: SectionItem[] = [
  {
    id: "1",
    title: "Summary",
    type: "text",
    content: "작성을 시작해보세요.",
  },
  {
    id: "1",
    title: "Work Experience",
    type: "long",
    itemList: [
      {
        title: "회사명",
        date: {
          start: "20○○.○○.",
          end: "",
          useEnd: true,
          useCurrent: true,
          useDuration: false,
        },
        position: "Frontend Developer",
        content:
          "`Next.js` `TypeScript`\n\n- 프로젝트에 대한 설명을 기술해주세요\n- [프로젝트 링크](https://example.domain)",
        location: "○○시 ○○구",
      },
    ],
  },
  {
    id: "1",
    title: "Honors & Awards",
    type: "short",
    itemList: [
      {
        date: "20○○",
        position: "등수",
        content: "대회명",
        location: "○○대학교",
      },
    ],
  },
  {
    id: "1",
    title: "Certificates",
    type: "short",
    itemList: [
      {
        date: "20○○",
        position: "자격증 이름",
        content: "발급단체명",
        location: "",
      },
    ],
  },
];

const EMPTY_SECTION_LIST: SectionItem[] = [];

const BASIC_USER_INFO = {
  name: "Gildong Hong",
  position: "DEVELOPER",
  contact: [
    {
      id: 1714569992336,
      type: "phone",
      content: "010-xxxx-xxxx",
    },
    {
      id: 1714570014226,
      type: "email",
      content: "example@email.com",
    },
  ],
  address: "",
  quote: "",
};

const EMPTY_USER_INFO = {
  name: "",
  position: "",
  contact: [],
  address: "",
  quote: "",
};

export async function createResume(
  createClient: () => SupabaseClient,
  useTemplate: boolean
) {
  const supabase = createClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error();
    }

    console.log(useTemplate ? BASIC_SECTION_LIST : EMPTY_SECTION_LIST);

    const { data, error } = await supabase
      .from(RESUME_TABLE)
      .insert({
        fileName: useTemplate ? "템플릿으로 시작하기" : "빈 이력서",
        sectionList: useTemplate ? BASIC_SECTION_LIST : EMPTY_SECTION_LIST,
        uid: user.id,
        modifiedAt: new Date(),
        mainColor: COLOR.PRIMARY.RESUME,
        userInfo: useTemplate ? BASIC_USER_INFO : EMPTY_USER_INFO,
      })
      .select()
      .single();

    if (error) {
      throw new Error();
    }
    return data.id;
  } catch (error) {
    alert("새로 이력서를 만들지 못했습니다");
    return null;
  }
}
