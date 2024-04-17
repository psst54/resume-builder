import { Text } from "@react-pdf/renderer";
import { styles } from "./styles";

export default function Position({
  position,
  mainColor,
}: {
  position: string;
  mainColor: string;
}) {
  if (!position) {
    return <></>;
  }

  return (
    <Text style={[styles.position, { color: mainColor }]}>{position}</Text>
  );
}
