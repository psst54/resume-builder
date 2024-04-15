import { View, Text, Link } from "@react-pdf/renderer";
import { styles } from "./styles";
import Header from "./Header";
import DescItems from "./DescItems";

const LongType = ({
  contentList,
  mainColor,
}: {
  contentList: any; // [todo] define type
  mainColor: string;
}) => {
  if (!contentList) {
    return <></>;
  }
  console.log(contentList);

  return (
    <View style={styles.sectionContentWrapper}>
      {contentList.map(
        (
          content: any, // [todo] define type
          contentIdx: number
        ) => (
          <View key={contentIdx} style={styles.sectionContent} wrap={false}>
            <div style={styles.sectionMain}>
              <Header content={content} mainColor={mainColor} />

              <DescItems descItems={content.descItems} mainColor={mainColor} />
            </div>
          </View>
        )
      )}
    </View>
  );
};

export default LongType;
