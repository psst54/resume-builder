/** @jsxImportSource @emotion/react */

import { useAppDispatch } from "@/redux/hooks";
import { setSignIn } from "@features/userSlice";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

import { color } from "@/app/styles";

const buttonStyle = {
  width: "18rem",
  height: "3rem",
  marginTop: "2rem",

  background: color.primary.standard,
  color: color.white.standard,
  fontWeight: 500,

  border: "none",
  borderRadius: "1rem",

  cursor: "pointer",

  "&:active": {
    background: color.primary.active,
  },
};

export default function SignInButton({ signInData }: { signInData: any }) {
  const dispatch = useAppDispatch();
  const signIn = async () => {
    const email = signInData.filter(
      (signInDatum) => signInDatum.field === "email"
    )[0].value;
    const password = signInData.filter(
      (signInDatum) => signInDatum.field === "password"
    )[0].value;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw new Error("로그인 실패");
      dispatch(setSignIn(data?.user?.id));
    } catch (e) {
      alert("로그인에 실패했습니다.\n잠시 뒤에 다시 시도해주세요");
    }
  };

  return (
    <button
      css={buttonStyle}
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
}
