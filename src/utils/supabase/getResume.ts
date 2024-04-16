import { SupabaseClient } from "@supabase/supabase-js";
import { RESUME_TABLE } from "./constant";

export async function getResume(
  createClient: () => SupabaseClient,
  id: string
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(RESUME_TABLE)
    .select()
    .eq("id", id)
    .single();

  if (error) {
    throw new Error();
  }

  return data;
}
