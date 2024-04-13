import { COLOR } from "@/styles/color";
import { createClient } from "@/utils/supabase/client";

import { emptyTemplate, basicTemplate } from "@assets/resumeTemplate";
const RESUME_TABLE = "resume";

export async function createResume({ useTemplate }: { useTemplate: boolean }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
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
