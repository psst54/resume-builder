import { Text } from "@react-pdf/renderer";

import { StyleSheet } from "@react-pdf/renderer";
import { COLOR } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: { fontSize: 12, fontWeight: 600 },
  position: { color: COLOR.GRAY.STANDARD, fontSize: 9, fontWeight: 300 },

  leftArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    flexShrink: 0,

    fontWeight: 300,
  },
  location: {
    fontSize: 9,
    fontWeight: 200,
    flexShrink: 0,
  },
  date: {
    color: COLOR.GRAY.STANDARD,
  },
});

export default function Header({
  content,
  mainColor,
}: {
  content: any;
  mainColor: string;
}) {
  return (
    <div style={styles.container}>
      <div>
        <Text style={styles.title}>{content.title}</Text>
        <Text style={styles.position}>{content.position}</Text>
      </div>

      <div style={styles.leftArea}>
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
        <Text style={styles.date}>{`${content.date.start}${
          content.date.useEnd || content.date.useCurrent
            ? ` - ${content.date.useCurrent ? "진행중" : content.date.end}`
            : ""
        }`}</Text>
      </div>
    </div>
  );
}
