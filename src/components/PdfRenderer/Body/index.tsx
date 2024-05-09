import { View } from "@react-pdf/renderer";
import { styles } from "./styles";
import Section from "./Section";
import { SectionType } from "@/types/resume";

export default function Body({
  bodyData,
  mainColor,
}: {
  bodyData: SectionType[];
  mainColor: string;
}) {
  if (!bodyData) {
    return <></>;
  }

  return (
    <View style={styles.sections}>
      {bodyData.map((section: SectionType, sectionIndex: number) => (
        <Section key={sectionIndex} data={section} mainColor={mainColor} />
      ))}
    </View>
  );
}
