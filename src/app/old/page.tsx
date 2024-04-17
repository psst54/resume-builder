import OldScreen from "./screen";
import { createClient } from "@/utils/supabase/server";
import { getResumeList } from "@/utils/supabase/getResumeList";

export default async function Home() {
  const resumeList = await getResumeList(createClient);

  return <OldScreen resumeList={resumeList} />;
}
