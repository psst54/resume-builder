import MainPage from "./main";
import { createClient } from "@/utils/supabase/server";
import { getResumeList } from "@/utils/supabase/getResumeList";
import { RESUME_TABLE } from "@/utils/supabase/constant";

export default async function Home() {
  const resumeList = await getResumeList(createClient, RESUME_TABLE);

  return <MainPage resumeList={resumeList} />;
}
