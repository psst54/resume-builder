import { Text, View, StyleSheet } from "@react-pdf/renderer";

import TextType from "./TextType";
import LongType from "./LongType";
import ShortType from "./shortType";

const rendererStyles = StyleSheet.create({
  section: {
    width: "100%",
  },
  sectionHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
  },
  contentTitle: {
    fontSize: 12,
    fontWeight: 500,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  sectionDivBar: {
    borderBottom: "1px solid #000",
    flexGrow: 1,
  },
});

const SectionRenderer = ({ data, mainColor }) => {
  console.log(data);

  return (
    <View style={rendererStyles.section} wrap>
      <div style={rendererStyles.sectionHeader}>
        <Text style={rendererStyles.sectionTitle}>
          <Text style={{ color: mainColor }}>{data?.title?.slice(0, 3)}</Text>
          {data?.title ? data?.title?.slice(3) : "Empty Section Title"}
        </Text>
        <div style={rendererStyles.sectionDivBar} />
      </div>

      {data.type === "text" && <TextType data={data} />}
      {data.type === "short" && <ShortType data={data} mainColor={mainColor} />}
      {data.type === "long" && <LongType data={data} mainColor={mainColor} />}
    </View>
  );
};

export default SectionRenderer;
