import { SupabaseClient } from "@supabase/supabase-js";
import { RESUME_TABLE } from "./constant";

export async function deleteResume(
  createClient: () => SupabaseClient,
  id: string
) {
  const supabase = createClient();

  const { error } = await supabase.from(RESUME_TABLE).delete().eq("id", id);

  if (error) {
    throw new Error();
  }
}
