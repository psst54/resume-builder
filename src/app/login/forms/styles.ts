import { COLOR } from "@/styles/color";

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

  border: `1px solid ${COLOR.INPUT_BORDER}`,
  borderRadius: "0.5rem",
};

export const submitButton = {
  width: "100%",
  padding: "0.75rem",

  background: COLOR.PRIMARY.STANDARD,
  color: COLOR.WHITE.STANDARD,

  border: "none",
  borderRadius: "0.75rem",

  cursor: "pointer",

  "&:active": {
    background: COLOR.PRIMARY.ACTIVE,
  },

  "&:disabled": {
    background: COLOR.GRAY.LIGHT,
    cursor: "not-allowed",
  },
};

export const warngingMessage = {
  color: COLOR.INVALID,
  fontSize: "0.8rem",
};
