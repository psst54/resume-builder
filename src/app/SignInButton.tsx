/** @jsxImportSource @emotion/react */

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setSignIn } from "@features/userSlice";

import { supabase } from "@libs/supabase";

import { color } from "@/styles/color";

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
  const router = useRouter();
  const dispatch = useAppDispatch();
  const signIn = async () => {
    const email = signInData.filter(
      (signInDatum: any) => signInDatum.field === "email"
    )[0].value;
    const password = signInData.filter(
      (signInDatum: any) => signInDatum.field === "password"
    )[0].value;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw new Error("로그인 실패");
      dispatch(setSignIn(data?.user?.id));
      router.push("/");
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
