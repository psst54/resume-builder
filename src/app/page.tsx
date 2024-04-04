import MainPage from "./MainPage";
import { createClient } from "@/utils/supabase/server";

export interface InputData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default async function Home() {
  const supabase = createClient();

  const getResumeList = async () => {
    try {
      const { data, error } = await supabase
        .from("resume")
        .select()
        .order("modified_at", { ascending: false });

      if (error) throw new Error();

      return data;
    } catch (err) {
      return null;
    }
  };

  const resumeList = await getResumeList();

  return <MainPage resumeList={resumeList} />;
}
