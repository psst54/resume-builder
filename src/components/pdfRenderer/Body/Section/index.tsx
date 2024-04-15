import { Text, View } from "@react-pdf/renderer";

import TextType from "../../TextType";
import LongType from "../../LongType";
import ShortType from "../../shortType";
import { styles } from "./styles";

export default function Section({
  data,
  mainColor,
}: {
  data: any; // [todo] define type
  mainColor: string;
}) {
  const titleHead = data.title.slice(0, 3);
  const titleTail = data.title.slice(3);

  return (
    <View style={styles.container} wrap>
      <div style={styles.header}>
        <Text style={styles.title}>
          {data.title ? (
            <>
              <Text style={{ color: mainColor }}>{titleHead}</Text>
              {titleTail}
            </>
          ) : (
            "Empty Section Title"
          )}
        </Text>
        <div style={styles.divider} />
      </div>

      {/* [todo] */}
      {data.type === "text" && <TextType data={data} />}
      {data.type === "short" && <ShortType data={data} mainColor={mainColor} />}
      {data.type === "long" && <LongType data={data} mainColor={mainColor} />}
    </View>
  );
}
