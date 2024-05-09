import { COLOR } from "@/styles/color";

export const button = {
  width: "100%",
  padding: "0.5rem",
  background: COLOR.BLACK.STANDARD,

  color: COLOR.WHITE.STANDARD,
  borderRadius: "1rem",
};

export const hoverButton = {
  "&:hover": {
    cursor: "pointer",
    fontWeight: 900,
    background: COLOR.BLACK.HOVER,
  },
};
