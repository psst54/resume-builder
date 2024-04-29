import { Text, View } from "@react-pdf/renderer";

import TextType from "../TextType";
import LongType from "../LongType";
import ShortType from "../ShortType";
import { styles } from "./styles";
import {
  LongSectionType,
  SectionType,
  ShortSectionType,
  TextSectionType,
} from "@/types/resume";

export default function Section({
  data,
  mainColor,
}: {
  data: SectionType;
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
      {data.type === "text" && (
        <TextType content={(data as TextSectionType).content} />
      )}
      {data.type === "short" && (
        <ShortType
          itemList={(data as ShortSectionType).itemList}
          mainColor={mainColor}
        />
      )}
      {data.type === "long" && (
        <LongType
          itemList={(data as LongSectionType).itemList}
          mainColor={mainColor}
        />
      )}
    </View>
  );
}
