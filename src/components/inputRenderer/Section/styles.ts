import { COLOR } from "@/styles/color";

export const container = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "1rem",

  width: "100%",
};

export const titleContainer = {
  display: "flex",
  alignItems: "flex-end",

  width: "100%",
};

export const titleStyle = {
  fontSize: "1.2rem",
  fontWeight: 800,
  color: "#000",
};

export const divider = {
  borderBottom: `2px solid ${COLOR.LIGHT_GRAY.STANDARD}`,
  flexGrow: 1,
};
