/** @jsxImportSource @emotion/react */

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";

import { buttonStyle } from "@/styles/signInButton";
import { signIn } from "@utils/signIn";

export default function SignInButton({ inputData }: { inputData: any }) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <button
      css={buttonStyle}
      onClick={() => {
        signIn(inputData, router, dispatch).then();
      }}
    >
      로그인
    </button>
  );
}
