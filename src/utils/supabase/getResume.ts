import { SupabaseClient } from "@supabase/supabase-js";

export async function getResume(
  createClient: () => SupabaseClient,
  table: string,
  id: string
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(table)
    .select()
    .eq("id", id)
    .single();

  if (error) {
    throw new Error();
  }

  return data;
}
