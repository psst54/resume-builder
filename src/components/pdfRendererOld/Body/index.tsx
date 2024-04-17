import { View } from "@react-pdf/renderer";
import { styles } from "./styles";
import Section from "./Section";

export default function Body({
  bodyData,
  mainColor,
}: {
  bodyData: any; // [todo] define type
  mainColor: string;
}) {
  if (!bodyData) {
    return <></>;
  }

  return (
    <View style={styles.sections}>
      {bodyData.map((section: any, sectionIndex: number) => (
        <Section key={sectionIndex} data={section} mainColor={mainColor} />
      ))}
    </View>
  );
}
