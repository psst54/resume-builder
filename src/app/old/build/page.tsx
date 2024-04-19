import { createClient } from "@/utils/supabase/server";
import { getResume } from "@/utils/supabase/getResume";
import BuildScreen from "./screen";
import { RESUME_TABLE_OLD } from "@/utils/supabase/constant";

async function Build({
  searchParams,
}: {
  searchParams: { resumeId?: string };
}) {
  const resumeId = searchParams.resumeId;
  if (!resumeId) {
    return <></>;
  }

  const resumeData = await getResume(createClient, RESUME_TABLE_OLD, resumeId);

  return <BuildScreen resumeId={resumeId} initialData={resumeData} />;
}

export default Build;
