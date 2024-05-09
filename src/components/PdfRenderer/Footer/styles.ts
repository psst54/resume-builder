import { StyleSheet } from "@react-pdf/renderer";
import { COLOR } from "@/styles/color";

export const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    position: "absolute",
    bottom: 0,

    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
  },
  pageNumber: {
    fontSize: 9,
    color: COLOR.GRAY.STANDARD,
  },
});
