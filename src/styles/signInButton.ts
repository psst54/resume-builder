import { COLOR } from "@/styles/color";

export const buttonStyle = {
  width: "18rem",
  height: "3rem",
  marginTop: "2rem",

  background: COLOR.PRIMARY.STANDARD,
  color: COLOR.white.STANDARD,
  fontWeight: 500,

  border: "none",
  borderRadius: "1rem",

  cursor: "pointer",

  "&:active": {
    background: COLOR.PRIMARY.ACTIVE,
  },
};
