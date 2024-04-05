import { color } from "@/styles/color";

const breakpoints = [768];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const container = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  gap: "1rem",

  width: "100%",
  minHeight: "100vh",
  padding: "2rem",
  background: color.lightGray.standard,

  overflowY: "auto" as const,
};

export const title = {
  fontSize: "2rem",
};

export const pageSizeAlert = {
  color: color.primary.standard,
  wordBreak: "keep-all" as const,

  [mq[0]]: {
    display: "none",
  },
};

export const formContainer = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  gap: "1.5rem",

  width: "fit-content",
  height: "fit-content",
  padding: "3rem",
  paddingTop: "1.5rem",
  background: color.white.standard,

  borderRadius: "1rem",
};

export const formWrapper = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "2rem",
};
export const inputListWrapper = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.5rem",
};
export const inputBox = {
  width: "100%",
  padding: "0.5rem",

  border: `1px solid ${color.inputBorder}`,
  borderRadius: "0.5rem",
};

export const submitButton = {
  width: "100%",
  padding: "0.75rem",

  background: color.primary.standard,
  color: color.white.standard,

  border: "none",
  borderRadius: "0.75rem",

  cursor: "pointer",

  "&:active": {
    background: color.primary.active,
  },
};
