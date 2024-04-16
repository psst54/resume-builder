import { StyleSheet } from "@react-pdf/renderer";
import { COLOR } from "@/styles/color";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    lineHeight: 1.2,
  },

  // ---------- name ----------
  userName: {
    color: COLOR.GRAY.STANDARD,
    fontSize: 32,
    fontWeight: 300,
  },
  userNameBold: {
    color: COLOR.darkGray,
    fontWeight: 900,
  },

  // ---------- position ----------
  position: {
    fontSize: 12,
    fontWeight: 300,
  },

  contactSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,

    fontWeight: 200,
  },
  contactItemWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contactItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  contactDivider: { marginLeft: 5, marginRight: 5 },
  contactIcon: { width: 8, height: 8 },

  // ---------- quote ----------
  quote: {
    marginTop: 10,

    color: COLOR.darkGray,
    fontSize: 12,
  },
});
