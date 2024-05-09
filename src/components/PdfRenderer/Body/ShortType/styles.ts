import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  itemWrapper: { display: "flex", flexDirection: "column", gap: 3 },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  leftSide: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
  },
  yearText: {
    fontWeight: 200,
    width: "50px",
    flexShrink: 0,
    textAlign: "center",
  },
  honorInfo: {
    wordBreak: "keep-all",
    fontWeight: 300,
  },
  positionText: { fontWeight: 600 },

  leftContainer: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },

  location: {
    fontSize: 9,
    fontWeight: 200,
    flexShrink: 0,
  },
});
