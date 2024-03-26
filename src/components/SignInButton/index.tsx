/** @jsxImportSource @emotion/react */

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";

import { buttonStyle } from "@/styles/signInButton";
import { signIn } from "@utils/signIn";
import { InputData } from "@/app/page";

export default function SignInButton({ inputData }: { inputData: InputData }) {
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
