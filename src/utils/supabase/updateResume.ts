import { SupabaseClient } from "@supabase/supabase-js";
import { RESUME_TABLE } from "./constant";

export async function updateResume(
  createClient: () => SupabaseClient,
  id: string,
  title: string,
  data: any, // [todo] fix any
  mainColor: string
) {
  const supabase = createClient();

  const { error } = await supabase
    .from(RESUME_TABLE)
    .update([
      {
        ...data,
        fileName: title,
        modifiedAt: new Date(),
        mainColor,
      },
    ])
    .eq("id", id);

  if (error) {
    throw new Error();
  }
}
