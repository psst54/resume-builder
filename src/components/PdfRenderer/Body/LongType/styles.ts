import { StyleSheet } from "@react-pdf/renderer";
import { COLOR } from "../../styles";

export const styles = StyleSheet.create({
  sectionContentWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  sectionContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },

  sectionMain: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    flexBasis: 0,
    flexGrow: 1,
  },
  sectionItems: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    flexGrow: 1,

    lineHeight: 1.4,
  },
  sectionItem: {
    display: "flex",
    flexDirection: "column",
    wordBreak: "keep-all",
  },
  techStackList: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    flexWrap: "wrap",
  },
  techStackItem: {
    backgroundColor: COLOR.LIGHT_GRAY.STANDARD,
    lineHeight: 1.4,
    fontWeight: 300,

    borderRadius: 4,
    paddingLeft: 5,
    paddingRight: 5,
  },

  link: {
    flexGrow: 0,
  },
});
