import OldScreen from "./screen";
import { createClient } from "@/utils/supabase/server";
import { getResumeList } from "@/utils/supabase/getResumeList";
import { RESUME_TABLE_OLD } from "@/utils/supabase/constant";

export default async function Home() {
  const resumeList = await getResumeList(createClient, RESUME_TABLE_OLD);

  return <OldScreen resumeList={resumeList} />;
}
