import { COLOR } from "@/styles/color";

import { emptyTemplate, basicTemplate } from "@assets/resumeTemplate";
import { SupabaseClient } from "@supabase/supabase-js";
import { RESUME_TABLE } from "./constant";

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
        title: useTemplate ? "템플릿으로 시작하기" : "빈 이력서",
        content: useTemplate ? basicTemplate : emptyTemplate,
        uid: user.id,
        modified_at: new Date(),
        main_color: COLOR.PRIMARY.RESUME,
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
