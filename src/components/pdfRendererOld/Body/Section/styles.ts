import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  contentTitle: {
    fontSize: 12,
    fontWeight: 500,
  },
  divider: {
    borderBottom: "1px solid #000",
    flexGrow: 1,
  },
});
