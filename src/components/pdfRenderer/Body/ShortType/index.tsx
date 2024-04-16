import { Text } from "@react-pdf/renderer";
import { styles } from "./styles";

export default function ShortType({
  contentList,
  mainColor,
}: {
  contentList: any; // [todo] define type
  mainColor: string;
}) {
  if (!contentList) {
    return <></>;
  }

  return (
    <div style={styles.itemWrapper}>
      {contentList.map(
        (
          content: any, // [todo] define type
          contentIndex: number
        ) => (
          <div key={contentIndex} style={styles.itemContainer}>
            <div style={styles.leftSide}>
              <Text style={styles.yearText}>{content.year}</Text>
              <div style={styles.leftContainer}>
                <Text style={styles.honorInfo}>
                  <Text style={styles.positionText}>{content.position}</Text>,{" "}
                  {content.subscription}
                </Text>
              </div>
            </div>

            <Text
              style={[
                styles.location,
                {
                  color: mainColor,
                },
              ]}
            >
              {content.location}
            </Text>
          </div>
        )
      )}
    </div>
  );
}
