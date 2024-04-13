import styled from "@emotion/styled";
import { COLOR } from "@/styles/color";

export const container = {
  minHeight: "100vh",

  display: "flex",
  flexDirection: "column" as const,
};

export const body = {
  flexGrow: 1,
  display: "flex",
};

export const inputArea = {
  flexShrink: 0,

  width: "50%",
  height: "calc(100vh - 4rem)",
  overflowY: "scroll",

  "::-webkit-scrollbar": {
    background: "transparent",
    width: "0.8rem",
  },

  "::-webkit-scrollbar-thumb": {
    background: COLOR.GRAY.STANDARD,
    width: "0.8rem",
    borderRadius: "0.2rem",
  },

  "@media (max-width: 800px)": {
    width: "100%",

    "::-webkit-scrollbar": {
      background: "transparent",
      width: "0.6rem",
    },

    "::-webkit-scrollbar-thumb": {
      background: COLOR.GRAY.STANDARD,
      width: "0.6rem",
      borderRadius: "0.2rem",
    },
  },
};

export const previewArea = {
  flexShrink: 0,

  width: "50%",
  height: "calc(100vh - 4rem)",
  overflowY: "scroll",

  display: "flex",

  background: COLOR.LIGHT_GRAY.STANDARD,

  "::-webkit-scrollbar": {
    background: "transparent",
    width: "0.8rem",
  },

  "::-webkit-scrollbar-thumb": {
    background: COLOR.GRAY.STANDARD,
    width: "0.8rem",
    borderRadius: "0.2rem",
  },

  "@media (max-width: 800px)": {
    width: 0,
  },
};
