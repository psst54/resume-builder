import { Text, View } from "@react-pdf/renderer";
import { formatDate } from "../date";
import { styles } from "./styles";

export default function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.pageNumber}>
        {formatDate({ dateObj: new Date() })}
      </Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}
