/** @jsxImportSource @emotion/react */

import { Dispatch, SetStateAction } from "react";
import Input from "../Input";

export default function FileName({
  resumeFileName,
  setResumeFileName,
}: {
  resumeFileName: string;
  setResumeFileName: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Input
      title="파일 이름"
      value={resumeFileName}
      onChange={setResumeFileName}
      placeholder="pdf 파일 이름을 입력해주세요."
    />
  );
}
