import { Text, StyleSheet } from "@react-pdf/renderer";
import { styles } from "./styles";

const shortTypeStyles = StyleSheet.create({
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
  },
  positionText: { fontWeight: 600 },

  leftContainer: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },
});

const ShortType = ({ data, mainColor }) => {
  return (
    <div style={shortTypeStyles.itemWrapper}>
      {data?.content?.map((content, contentIdx) => (
        <div key={contentIdx} style={shortTypeStyles.itemContainer}>
          <div style={shortTypeStyles.leftSide}>
            <Text style={shortTypeStyles.yearText}>{content.year}</Text>
            <div style={shortTypeStyles.leftContainer}>
              <Text style={shortTypeStyles.honorInfo}>
                <Text style={shortTypeStyles.positionText}>
                  {content.position}
                </Text>
                , {content.subscription}
              </Text>
            </div>
          </div>

          <Text
            style={{
              color: mainColor,
              fontSize: 9,
              fontWeight: 200,
              flexShrink: 0,
            }}
          >
            {content.location}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default ShortType;
