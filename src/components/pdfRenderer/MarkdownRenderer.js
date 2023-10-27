import { Text, StyleSheet, Link } from "@react-pdf/renderer";
import Markdown from "react-markdown";

const makrdownStyles = StyleSheet.create({
  h1: { fontSize: 16, fontWeight: 800 },
  h2: { fontSize: 14, fontWeight: 700 },
  h3: { fontSize: 12, fontWeight: 600 },
  ul: {},
  ol: {},
  li: {},
});

export default function MarkdownRenderer({ content }) {
  return (
    <Markdown
      components={{
        h1(props) {
          return <Text style={makrdownStyles.h1}>{props.children}</Text>;
        },
        h2(props) {
          return <Text style={makrdownStyles.h2}>{props.children}</Text>;
        },
        h3(props) {
          return <Text style={makrdownStyles.h3}>{props.children}</Text>;
        },
        ul(props) {
          if (typeof props.children === "string") {
            if (props.children !== "\n")
              return (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ flexShrink: 0 }}>• </Text>
                  <Text>{props.children}</Text>
                </div>
              );
            return <></>;
          }
          return props?.children?.map((child) => {
            if (typeof child === "string") {
              if (child !== "\n")
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ flexShrink: 0 }}>• </Text>
                  <Text>{child}</Text>
                </div>;
              return <></>;
            }
            return <div style={{ paddingLeft: 5 }}>{child}</div>;
          });
        },
        ol(props) {
          if (typeof props.children === "string") {
            if (props.children !== "\n")
              return (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ flexShrink: 0 }}>• </Text>
                  <Text>{props.children}</Text>
                </div>
              );
            return <></>;
          }
          return props?.children?.map((child) => {
            if (typeof child === "string") {
              if (child !== "\n")
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ flexShrink: 0 }}>• </Text>
                  <Text>{child}</Text>
                </div>;
              return <></>;
            }
            return <div style={{ paddingLeft: 5 }}>{child}</div>;
          });
        },
        li(props) {
          if (typeof props.children === "string") {
            if (props.children !== "\n")
              return (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ flexShrink: 0 }}>• </Text>
                  <Text>{props.children}</Text>
                </div>
              );
            return <></>;
          }
          return props?.children?.map((child) => {
            if (typeof child === "string") {
              if (child !== "\n")
                return (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ flexShrink: 0 }}>• </Text>
                    <Text>{child}</Text>
                  </div>
                );
              return <></>;
            }
            return <div style={{ paddingLeft: 10 }}>{child}</div>;
          });
        },
        p(props) {
          console.log("[p]", props.children);

          return <Text>{props.children}</Text>;
        },
      }}
    >
      {content}
    </Markdown>
  );
}
