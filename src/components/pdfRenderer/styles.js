import { StyleSheet } from "@react-pdf/renderer";
import { color } from "@/styles/color";

const styles = StyleSheet.create({
  // page--------------------------------------------------------------------------

  page: {
    paddingTop: 40,
    paddingBottom: 30,

    display: "flex",
    flexDirection: "column",

    fontFamily: "Pretendard-PDF",
    fontSize: 10,
    lineHeight: 1.4,
    wordBreak: "keep-all",

    backgroundColor: color.white.standard,
  },
  pageWrapper: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  sections: { display: "flex", flexDirection: "column", gap: 20 },

  // header--------------------------------------------------------------------------

  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    lineHeight: 1.2,
  },
  contactSection: {
    display: "flex",
    flexDirection: "row",
    marginTop: 2,
    alignItems: "center",
  },

  userName: {
    color: color.gray.standard,
    fontSize: 32,
    fontWeight: 300,
  },
  userNameBold: {
    color: color.darkGray,
    fontWeight: 900,
  },
  contactText: {
    fontWeight: 200,
    marginLeft: 3,
    marginRight: 3,
  },
  contactItemIcon: { width: 8, height: 8 },
  disableLinkStyle: {
    color: color.primary.standard,
    textDecoration: "none",
  },

  quote: {
    marginTop: 10,

    color: color.darkGray,
    fontSize: 12,
  },

  // footer--------------------------------------------------------------------------

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
    color: color.gray.standard,
  },

  // common--------------------------------------------------------------------------

  locationText: {
    color: color.primary.standarad,
    fontSize: 9,
    fontWeight: 200,
    flexShrink: 0,
  },
});

export { styles, color };
