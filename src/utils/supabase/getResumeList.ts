import { SupabaseClient } from "@supabase/supabase-js";

export async function getResumeList(
  createClient: () => SupabaseClient,
  table: string
) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from(table)
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
