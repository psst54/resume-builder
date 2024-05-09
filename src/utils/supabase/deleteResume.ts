import { SupabaseClient } from "@supabase/supabase-js";

export async function deleteResume(
  createClient: () => SupabaseClient,
  table: string,
  id: string
) {
  const supabase = createClient();

  const { error } = await supabase.from(table).delete().eq("id", id);

  if (error) {
    throw new Error();
  }
}
