import { ResumeContent, ContactItemType } from "@/types/resume";

export const contactItemTemplate: ContactItemType = {
  type: "phone",
  text: "",
  id: () => {
    return new Date().getTime();
  },
};

export const emptyTemplate: ResumeContent = {
  header: {
    title: "새 이력서",
    name: "새 이력서",
    position: "",
    quote: "",
    contactItems: [],
  },
  body: [
    {
      title: "Section Title",
      type: "text",
      content: [{ text: "작성을 시작해보세요." }],
    },
  ],
};

export const basicTemplate = {
  header: {},
  body: [
    {
      title: "Summary",
      type: "text",
      content: [{ text: "작성을 시작해보세요." }],
    },
    {
      title: "Work Experience",
      type: "long",
      content: [
        {
          title: "회사명",
          position: "Frontend Developer",
          location: "○○시 ○○구",
          useEndDate: true,
          start: "20○○.○○.",
          end: "20○○.○○.",
          descItems: [
            {
              type: "tag",
              items: ["Next.js", "TypeScript"],
            },
            {
              type: "list",
              items: ["프로젝트에 대한 설명을 기술해주세요"],
            },
          ],
        },
      ],
    },
    {
      title: "Honors & Awards",
      type: "short",
      content: [
        {
          title: "",
          position: "등수",
          year: "20○○",
          subscription: "대회명",
          location: "Online",
        },
      ],
    },
    {
      title: "Certificates",
      type: "short",
      content: [
        {
          title: "",
          position: "자격증 이름",
          year: "20○○",
          subscription: "발급단체명",
        },
      ],
    },
    {
      title: "Education",
      type: "long",
      content: [
        {
          title: "○○대학교",
          position: "○○학과",
          start: "20○○.○○.",
          useEndDate: true,
          end: "20○○.○○.",
          location: "○○시 ○○구",
          descItems: [
            {
              type: "list",
              items: ["CGPA ○○/4.5"],
            },
          ],
        },
      ],
    },
  ],
};
