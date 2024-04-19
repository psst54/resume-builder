import OldScreen from "./screen";
import { createClient } from "@/utils/supabase/server";
import { getResumeListOld } from "@/utils/supabase/getResumeListOld";

export default async function Home() {
  const resumeList = await getResumeListOld(createClient);

  return <OldScreen resumeList={resumeList} />;
}
