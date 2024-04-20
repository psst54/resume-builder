import { ResumeUserInfo } from "@/types/resume";
import Input from "../Input";

export type UserInfoFields = Exclude<keyof ResumeUserInfo, "contact">;

const textFieldList: {
  title: string;
  field: UserInfoFields;
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
  data,
  setData,
}: {
  data: ResumeUserInfo;
  setData: (field: UserInfoFields, value: string) => void;
}) {
  return (
    <div>
      {textFieldList.map((field, index) => (
        <Input
          key={index}
          title={field.title}
          value={data[field.field]}
          onChange={(value: string) => {
            setData(field.field, value);
          }}
          placeholder={field.placeholder}
        />
      ))}
    </div>
  );
}
