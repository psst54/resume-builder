// import { supabase } from "@libs/supabase";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export async function signIn(data: any, router: AppRouterInstance) {
  const email = data.email;
  const password = data.password;

  try {
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email,
    //   password,
    // });

    // if (error) throw new Error("로그인 실패");
    // dispatch(setSignIn(data?.user?.id));
    router.push("/");
  } catch (e) {
    alert("로그인에 실패했습니다.\n잠시 뒤에 다시 시도해주세요");
  }
}
