import { COLOR } from "@/styles/color";

export const resumeCard = {
  display: "flex",
  flexDirection: "column" as const,

  height: "10rem",
  padding: "2rem 3rem",
  background: COLOR.WHITE.STANDARD,
  border: "none",
  borderRadius: "1.2rem",

  cursor: "pointer",
};

export const cardTitle = {
  fontSize: "1.2rem",
  wordBreak: "keep-all" as const,
  textAlign: "left" as const,
};

export const dateText = { color: COLOR.GRAY.STANDARD };
