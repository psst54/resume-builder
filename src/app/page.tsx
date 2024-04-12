import { createClient } from "@/utils/supabase/server";
import MainPage from "./main";

export default async function Home() {
  async function getResumeList() {
    const supabase = createClient();

    try {
      const { data, error } = await supabase
        .from("resume")
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

  const resumeList = await getResumeList();

  return <MainPage resumeList={resumeList} />;
}
