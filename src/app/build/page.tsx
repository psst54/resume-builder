import { createClient } from "@/utils/supabase/server";
import { getResume } from "@/utils/supabase/getResume";
import BuildScreen from "./screen";

async function Build({
  searchParams,
}: {
  searchParams: { resumeId?: string };
}) {
  const resumeId = searchParams.resumeId;
  if (!resumeId) {
    return;
  }

  const resumeData = await getResume(createClient, resumeId);

  return <BuildScreen resumeId={"resumeId"} initialData={resumeData} />;
}

export default Build;
