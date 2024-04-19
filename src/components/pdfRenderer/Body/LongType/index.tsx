import { View } from "@react-pdf/renderer";
import { styles } from "./styles";
import Header from "./Header";
import { LongSectionItemType } from "@/types/resume";
import MarkdownItem from "./MarkdownItem";

const LongType = ({
  itemList,
  mainColor,
}: {
  itemList: LongSectionItemType[];
  mainColor: string;
}) => {
  if (!itemList) {
    return <></>;
  }

  return (
    <View style={styles.sectionContentWrapper}>
      {itemList.map((item: LongSectionItemType, itemIndex: number) => (
        <View key={itemIndex} style={styles.sectionContent} wrap={false}>
          <div style={styles.sectionMain}>
            <Header content={item} mainColor={mainColor} />

            <MarkdownItem
              key={itemIndex}
              content={item.content}
              mainColor={mainColor}
            />
          </div>
        </View>
      ))}
    </View>
  );
};

export default LongType;
