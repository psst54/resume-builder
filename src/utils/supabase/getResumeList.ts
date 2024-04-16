import { SupabaseClient } from "@supabase/supabase-js";
import { RESUME_TABLE } from "./constant";

export async function getResumeList(createClient: () => SupabaseClient) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from(RESUME_TABLE)
      .select()
      .order("modified_at", { ascending: false });

    if (error) {
      throw new Error();
    }

    return data;
  } catch (error) {
    return [];
  }
}
