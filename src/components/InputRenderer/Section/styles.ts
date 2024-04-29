import { COLOR } from "@/styles/color";

export const SECTION_TITLE_FONT_SIZE = "1.5rem";

export const container = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "1rem",

  width: "100%",
  padding: "1rem",
  background: "white",

  borderRadius: "1rem",
};

export const titleContainer = {
  display: "flex",
  alignItems: "flex-end",

  width: "100%",
};

export const titleStyle = {
  fontSize: SECTION_TITLE_FONT_SIZE,
  fontWeight: 400,
};

export const divider = {
  borderBottom: `2px solid ${COLOR.LIGHT_GRAY.STANDARD}`,
  flexGrow: 1,
};
