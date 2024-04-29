import { Text } from "@react-pdf/renderer";

export default function TextType({ content }: { content: string }) {
  return <Text>{content}</Text>;
}
