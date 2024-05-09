import { Text, StyleSheet, Link, View } from "@react-pdf/renderer";

import { unified } from "unified";
import remarkParse from "remark-parse";
import { VFile } from "vfile";
import { useEffect, useState } from "react";
import { COLOR } from "../../styles";

const markdownStyles = StyleSheet.create({
  view: { display: "flex", flexDirection: "row" },
  text: { fontWeight: 300 },
  h1: { fontSize: 13, fontWeight: 600 },
  h2: { fontSize: 12, fontWeight: 600 },
  h3: { fontSize: 11, fontWeight: 600 },
});

async function parse(content: string) {
  const processor = await unified().use(remarkParse);

  const file = new VFile();
  file.value = content;

  return await processor.runSync(processor.parse(file), file);
}

export default function MarkdownItem({
  content,
  mainColor,
}: {
  content: string;
  mainColor: string;
}) {
  const [parsedContent, setParsedContent] = useState({});

  useEffect(() => {
    parse(content).then((parsed) => {
      setParsedContent(parsed);
    });
  }, [content]);

  function renderNodes(node, index) {
    if (Object.keys(node).length === 0) return <View></View>;

    switch (node.type) {
      case "text": {
        return <Text key={index}>{node.value}</Text>;
      }

      case "root": {
        return node.children.map((child, index) => renderNodes(child, index));
      }

      case "raw": {
        return;
      }

      case "heading": {
        return (
          <View
            style={[
              markdownStyles.view,
              node.depth === 1 && markdownStyles.h1,
              node.depth === 2 && markdownStyles.h2,
              node.depth >= 3 && markdownStyles.h3,
            ]}
          >
            {node.children.map((child, index) => renderNodes(child, index))}
          </View>
        );
      }

      case "paragraph": {
        return (
          <View style={[markdownStyles.text, markdownStyles.view]}>
            {node.children.map((child, index) => renderNodes(child, index))}
          </View>
        );
      }

      case "list": {
        return (
          <View>
            {node.children.map((child, index) => (
              <View style={markdownStyles.view}>
                <Text>{"• "}</Text>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  {renderNodes(child, index)}
                </View>
              </View>
            ))}
          </View>
        );
      }

      case "listItem": {
        return node.children.map((child, index) => renderNodes(child, index));
      }

      case "inlineCode": {
        return (
          <Text
            style={[
              markdownStyles.text,
              {
                backgroundColor: COLOR.LIGHT_GRAY.STANDARD,
                borderRadius: 4,
                paddingLeft: 5,
                paddingRight: 5,
              },
            ]}
          >
            {node.value}
          </Text>
        );
      }

      case "link": {
        return (
          <Link
            src={node.url}
            style={[markdownStyles.text, { color: mainColor }]}
          >
            {node.children.map((child, index) => renderNodes(child, index))}
          </Link>
        );
      }

      case "strong": {
        return (
          <View style={[markdownStyles.view, { fontWeight: 900 }]}>
            {node.children.map((child, index) => renderNodes(child, index))}
          </View>
        );
      }

      default: {
        return null;
      }
    }
  }

  return renderNodes(parsedContent, 0);
}
