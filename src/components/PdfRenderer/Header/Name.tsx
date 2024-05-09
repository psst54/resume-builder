import { Text } from "@react-pdf/renderer";
import { styles } from "./styles";

export function Name({ name }: { name: string }) {
  if (!name) {
    return <Text style={styles.userName}>Untitled</Text>;
  }

  const nameList = name.split(" ");
  const firstName = nameList.slice(0, nameList.length - 1);
  const lastName = nameList[nameList.length - 1];

  return (
    <Text style={styles.userName}>
      {firstName.join(" ")} <Text style={styles.userNameBold}>{lastName}</Text>
    </Text>
  );
}
