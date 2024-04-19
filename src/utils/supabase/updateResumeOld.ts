import { SupabaseClient } from "@supabase/supabase-js";
import { RESUME_TABLE_OLD } from "./constant";

export async function updateResumeOld(
  createClient: () => SupabaseClient,
  id: string,
  title: string,
  data: any, // [todo] fix any
  mainColor: string
) {
  const supabase = createClient();

  const { error } = await supabase
    .from(RESUME_TABLE_OLD)
    .update([
      {
        content: data,
        title,
        modified_at: new Date(),
        main_color: mainColor,
      },
    ])
    .eq("id", id);

  if (error) {
    throw new Error();
  }
}
