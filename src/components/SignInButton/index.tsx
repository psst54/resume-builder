/** @jsxImportSource @emotion/react */

import { useRouter } from "next/navigation";

import { buttonStyle } from "@/styles/signInButton";
import { signIn } from "@utils/signIn";
import { InputData } from "@/app/page";

export default function SignInButton({ inputData }: { inputData: InputData }) {
  const router = useRouter();

  return (
    <button
      css={buttonStyle}
      onClick={() => {
        signIn(inputData, router).then();
      }}
    >
      로그인
    </button>
  );
}
