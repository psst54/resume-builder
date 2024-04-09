import { StyleSheet } from "@react-pdf/renderer";
import { COLOR } from "@/styles/color";

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

    backgroundColor: COLOR.white.STANDARD,
  },
  pageWrapper: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  sections: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

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
    color: COLOR.GRAY.STANDARD,
    fontSize: 32,
    fontWeight: 300,
  },
  userNameBold: {
    color: COLOR.darkGray,
    fontWeight: 900,
  },
  contactText: {
    fontWeight: 200,
    marginLeft: 3,
    marginRight: 3,
  },
  contactItemIcon: { width: 8, height: 8 },
  disableLinkStyle: {
    color: COLOR.PRIMARY.STANDARD,
  },

  quote: {
    marginTop: 10,

    color: COLOR.darkGray,
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
    color: COLOR.GRAY.STANDARD,
  },

  // common--------------------------------------------------------------------------

  locationText: {
    color: COLOR.PRIMARY.standarad,
    fontSize: 9,
    fontWeight: 200,
    flexShrink: 0,
  },
});

export { styles, COLOR };
