import { COLOR } from "@/styles/color";

export const inputWrapper = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",

  width: "100%",

  ["@media (max-width: 1200px)"]: {
    gap: "0.2rem",
    flexDirection: "column" as const,
    alignItems: "flex-start",
  },
};

export const inputTitle = {
  fontSize: "1.2rem",
  fontWeight: 400,

  display: "flex",
  flexBasis: "8rem",
  flexShrink: 0,
  paddingTop: "0.4rem",

  ["@media (max-width: 1200px)"]: {
    flexBasis: 0,
  },
};

export const defaultInput = {
  fontSize: "1rem",

  border: `1px solid ${COLOR.INPUT_BORDER}`,

  borderRadius: "0.6rem",
  padding: "0.3rem 1rem",

  "::placeholder": {
    color: "#ccc",
    opacity: 1,
  },

  ":-ms-input-placeholder": {
    color: "#ccc",
  },

  "::-ms-input-placeholder": {
    color: "#ccc",
  },
};

export const largeInput = {
  fontWeight: 300,

  width: "100%",
  maxWidth: "26rem",
};
