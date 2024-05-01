import { COLOR } from "@/styles/color";

import { SupabaseClient } from "@supabase/supabase-js";
import { RESUME_TABLE } from "./constant";
import { SectionItem } from "@/types/resume";

const BASIC_SECTION_LIST: SectionItem[] = [];
const EMPTY_SECTION_LIST: SectionItem[] = [];

const BASIC_USER_INFO = {
  name: "",
  position: "",
  contact: [],
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
