import { SupabaseClient } from "@supabase/supabase-js";
import { RESUME_TABLE } from "./constant";

export async function updateResume(
  createClient: () => SupabaseClient,
  id: string,
  title: string,
  data,
  mainColor: string
) {
  const supabase = createClient();

  const { error } = await supabase
    .from(RESUME_TABLE)
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
