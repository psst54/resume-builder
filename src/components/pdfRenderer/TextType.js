import { Text } from "@react-pdf/renderer";

const TextType = ({ data }) => {
  return <Text>{data.content[0].text}</Text>;
};

export default TextType;
