import { COLOR } from "@/styles/color";

export const container = {
  background: COLOR.LIGHT_GRAY.STANDARD,
  minHeight: "100dvh",
};

export const grid = {
  display: "grid",
  gap: "1rem",
  width: "100%",
  gridTemplateColumns: "repeat(auto-fill, minmax(15rem, auto))",

  padding: "2rem",
};
export const resetLinkStyle = {
  textDecoration: "none",
  color: COLOR.BLACK.STANDARD,
};

export const secondaryCard = {
  background: COLOR.LIGHT_GRAY.STANDARD,
  border: "3px solid " + COLOR.WHITE.STANDARD,
};
export const cardTitle = {
  margin: "auto",
  fontSize: "1.2rem",
  wordBreak: "keep-all" as const,
};
