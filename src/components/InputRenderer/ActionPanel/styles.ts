import { COLOR } from "@/styles/color";

export const container = {
  position: "fixed" as const,
  bottom: "1rem",
  right: 0,
  marginRight: "1rem",

  display: "flex",
  gap: "1rem",
  flexWrap: "wrap" as const,

  padding: "1rem 1rem 0 1rem",
  zIndex: 12,
};

export const button = {
  background: COLOR.BLACK.STANDARD,
  width: "3rem",
  height: "3rem",

  border: "2px solid " + COLOR.BLACK.STANDARD,
  borderRadius: "100%",

  cursor: "pointer",
};

export const importantButton = {
  background: COLOR.INVALID,
  border: "2px solid " + COLOR.INVALID,

  color: COLOR.INVALID,
  fontWeight: 500,
};
