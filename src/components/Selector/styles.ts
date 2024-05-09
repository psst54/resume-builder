import { COLOR } from "@/styles/color";

export const wrapper = {
  flexShrink: 0,
  width: "8rem",

  ["@media (min-width: 1200px)"]: {
    maxWidth: "14rem",
  },
};

export const selector = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0.2rem 1rem",

  border: `1px solid ${COLOR.INPUT_BORDER}`,
  borderRadius: "0.8rem",

  zIndex: 10,

  "&:hover": {
    cursor: "pointer",
  },
};

export const optionListWrapper = {
  position: "relative" as const,
};

export const backdrop = {
  position: "fixed" as const,

  background: "#3333",
  width: "100vw",
  height: "100vh",

  top: 0,
  left: 0,

  zIndex: 9,
};

export const optionListContainer = {
  position: "absolute" as const,
  marginTop: "0.2rem",

  border: `2px solid ${COLOR.LIGHT_GRAY.STANDARD}`,
  borderRadius: "0.8rem",
  background: "#fff",

  zIndex: 10,
};

export const optionItem = {
  padding: "0.25rem 0.75rem",

  "&:hover": {
    cursor: "pointer",
  },
};
