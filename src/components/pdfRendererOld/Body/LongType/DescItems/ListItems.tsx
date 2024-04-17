import { Text } from "@react-pdf/renderer";
import { styles } from "../styles";

export default function ListItems({ items }: { items: string[] }) {
  if (!items) {
    return <></>;
  }

  return (
    <div style={styles.sectionItems}>
      {items.map((item, index: number) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text style={styles.sectionItem}>• </Text>
          <div>
            {item.split("\\n").map((line) => (
              <Text>{line}</Text>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
