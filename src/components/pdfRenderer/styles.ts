import { StyleSheet } from "@react-pdf/renderer";
import { COLOR } from "@/styles/color";

const styles = StyleSheet.create({
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

  // common--------------------------------------------------------------------------
  locationText: {
    color: COLOR.PRIMARY.STANDARD,
    fontSize: 9,
    fontWeight: 200,
    flexShrink: 0,
  },
});

export { styles, COLOR };
