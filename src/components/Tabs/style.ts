import { COLOR } from "@/styles/color";

export const tabHeader = {
  position: "relative" as const,
  display: "flex",
  marginBottom: "1rem",
};

export const tabItem = {
  flexGrow: 1,
  background: "transparent",
  padding: "0.5rem 2rem",
  border: "none",

  cursor: "pointer",

  "&:hover": {
    background: COLOR.white.HOVER,
  },

  "&:active": {
    background: COLOR.white.ACTIVE,
  },
};

export const selectedTabItem = {
  color: COLOR.PRIMARY.STANDARD,
  fontWeight: "bold",
};

export const indicator = {
  position: "absolute" as const,
  bottom: 0,
  height: "2px",
  background: COLOR.PRIMARY.STANDARD,
  transition: "0.3s ease-in-out",
};
