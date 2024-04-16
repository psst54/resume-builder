import MainPage from "./main";
import { createClient } from "@/utils/supabase/server";
import { getResumeList } from "@/utils/supabase/getResumeList";

export default async function Home() {
  const resumeList = await getResumeList(createClient);

  return <MainPage resumeList={resumeList} />;
}
