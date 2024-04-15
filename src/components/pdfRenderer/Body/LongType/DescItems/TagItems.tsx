import { Text } from "@react-pdf/renderer";
import { styles } from "../styles";

export default function TagItems({ items }: { items: string[] }) {
  if (!items) {
    return <></>;
  }

  return (
    <div style={styles.techStackList}>
      {items.map((item: string, tagIndex: number) => (
        <Text key={tagIndex} style={styles.techStackItem}>
          {item}
        </Text>
      ))}
    </div>
  );
}
