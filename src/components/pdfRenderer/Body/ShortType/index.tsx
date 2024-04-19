import { Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import { ShortSectionItemType } from "@/types/resume";

export default function ShortType({
  itemList,
  mainColor,
}: {
  itemList: ShortSectionItemType[];
  mainColor: string;
}) {
  if (!itemList) {
    return <></>;
  }

  return (
    <div style={styles.itemWrapper}>
      {itemList.map((item: ShortSectionItemType, itemIndex: number) => (
        <div key={itemIndex} style={styles.itemContainer}>
          <div style={styles.leftSide}>
            <Text style={styles.yearText}>{item.date}</Text>
            <div style={styles.leftContainer}>
              <Text style={styles.honorInfo}>
                <Text style={styles.positionText}>{item.position}</Text>,{" "}
                {item.content}
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
            {item.location}
          </Text>
        </div>
      ))}
    </div>
  );
}
