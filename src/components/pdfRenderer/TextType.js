import { Text } from "@react-pdf/renderer";

const TextType = ({ data }) => {
  return <Text>{data.desc}</Text>;
};

export default TextType;
