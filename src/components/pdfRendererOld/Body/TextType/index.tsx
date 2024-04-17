import { Text } from "@react-pdf/renderer";

export default function TextType({
  contentList,
}: {
  contentList: any; // [todo] define type
}) {
  return <Text>{contentList[0].text}</Text>;
}
