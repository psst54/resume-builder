import { Text } from "@react-pdf/renderer";
import { styles } from "./styles";

export default function Quote({ quote }: { quote: string }) {
  if (!quote) {
    return <></>;
  }

  return <Text style={styles.quote}>{quote}</Text>;
}
