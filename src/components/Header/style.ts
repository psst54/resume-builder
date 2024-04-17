import { SIZE } from "@/styles/size";
import { COLOR } from "@/styles/color";

export const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  height: SIZE.HEADER_HEIGHT,
  backgroundColor: "#fff",
  padding: "0 2rem",

  borderBottom: `2px solid ${COLOR.LIGHT_GRAY.STANDARD}`,

  zIndex: 11,
};

export const title = {
  fontSize: "1.25rem",
};
