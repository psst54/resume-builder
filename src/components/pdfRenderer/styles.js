import { StyleSheet } from "@react-pdf/renderer";
import { COLOR } from "@/styles/color";

const styles = StyleSheet.create({
  // page--------------------------------------------------------------------------

  page: {
    fontFamily: "Pretendard-PDF",

    paddingTop: 40,
    paddingBottom: 30,

    display: "flex",
    flexDirection: "column",

    fontSize: 10,
    lineHeight: 1.4,
    wordBreak: "keep-all",
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
