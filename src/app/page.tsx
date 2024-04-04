import SignInPage from "./SignInPage";
import MainPage from "./MainPage";
import { redirect } from "next/navigation";
import { signout } from "./login/actions";
import { createClient } from "@/utils/supabase/server";

export interface InputData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <MainPage />;
}
