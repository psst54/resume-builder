import { ResumeUserInfo } from "@/types/resume";
import Input from "../Input";

const textFieldList: {
  title: string;
  field: Exclude<keyof ResumeUserInfo, "contact">;
  placeholder: string;
}[] = [
  {
    title: "이름",
    field: "name",
    placeholder: "Gildong Hong",
  },
  {
    title: "직업",
    field: "position",
    placeholder: "FRONTEND DEVELOPER",
  },
  {
    title: "한마디",
    field: "quote",
    placeholder: "한마디는 생략할 수 있습니다",
  },
];

export default function UserInfo({
  userInfoData,
  setData,
}: {
  userInfoData: ResumeUserInfo;
  setData: (field: string, value: string) => void;
}) {
  return (
    <div>
      {textFieldList.map((field) => (
        <Input
          title={field.title}
          value={userInfoData[field.field]}
          onChange={(value: string) => {
            setData(field.field, value);
          }}
          placeholder={field.placeholder}
        />
      ))}
    </div>
  );
}
