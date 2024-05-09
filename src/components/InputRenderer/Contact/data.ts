import { ContactType } from "@/types/resume";

export const CONTACT_DATA: {
  title: string;
  type: ContactType;
  placeholder: string;
}[] = [
  {
    title: "전화번호",
    type: "phone",
    placeholder: "(+82) 10-XXXX-XXXX",
  },
  {
    title: "메일",
    type: "email",
    placeholder: "example@email.com",
  },
  {
    title: "홈페이지",
    type: "homepage",
    placeholder: "psst54.me",
  },
  {
    title: "GitHub",
    type: "GitHub",
    placeholder: "GitHub handle",
  },
  {
    title: "GitLab",
    type: "GitLab",
    placeholder: "GitLab handle",
  },
  {
    title: "Stack Overflow",
    type: "Stack Overflow",
    placeholder: "Stack Overflow handle",
  },
  {
    title: "LinkedIn",
    type: "LinkedIn",
    placeholder: "LinkedIn handle",
  },
  {
    title: "X",
    type: "X",
    placeholder: "X handle",
  },
  {
    title: "Reddit",
    type: "Reddit",
    placeholder: "Reddit handle",
  },
];
