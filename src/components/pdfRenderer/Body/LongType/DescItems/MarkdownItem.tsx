import { Text, StyleSheet, Link } from "@react-pdf/renderer";
import Markdown from "react-markdown";

const markdownStyles = StyleSheet.create({
  h1: { fontSize: 16, fontWeight: 800 },
  h2: { fontSize: 14, fontWeight: 700 },
  h3: { fontSize: 12, fontWeight: 600 },
});

export default function MarkdownItem({
  content,
  mainColor,
}: {
  content: string;
  mainColor: string;
}) {
  return (
    <Text>
      <Markdown
        components={{
          h1(props) {
            return <Text style={markdownStyles.h1}>{props.children}</Text>;
          },
          h2(props) {
            return <Text style={markdownStyles.h2}>{props.children}</Text>;
          },
          h3(props) {
            return <Text style={markdownStyles.h3}>{props.children}</Text>;
          },
          ul(props) {
            if (typeof props.children === "string") {
              if (props.children !== "\n") return <Text>{props.children}</Text>;
              return <></>;
            }
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {(props?.children as any[]).map((child) => {
                  if (typeof child === "string") {
                    if (child !== "\n")
                      return (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingLeft: 2,
                            paddingTop: 0.2,
                            paddingBottom: 0.2,
                          }}
                        >
                          <Text style={{ flexShrink: 0 }}>• </Text>
                          <Text style={{ fontWeight: 300 }}>{child}</Text>
                        </div>
                      );
                    return <></>;
                  }

                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingLeft: 2,
                        paddingTop: 0.2,
                        paddingBottom: 0.2,
                      }}
                    >
                      <Text style={{ flexShrink: 0 }}>• </Text>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {child}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          },
          li(props) {
            if (typeof props.children === "string") {
              if (props.children !== "\n")
                return (
                  <Text style={{ fontWeight: 300 }}>{props.children}</Text>
                );
              return <Text></Text>;
            }

            if (!Array.isArray(props.children)) {
              return <Text>{props.children}</Text>;
            }

            let arr: any[] = [];
            let index = 0;
            let flag = true;

            props.children.forEach((child) => {
              if (
                typeof child === "string" ||
                child.key.includes("a") ||
                child.key.includes("strong")
              ) {
                if (child == "\n") {
                } else if (flag) {
                  arr.push({ type: "string", arr: [child] });
                  flag = false;
                } else {
                  arr[index].arr.push(child);
                }
              } else {
                if (flag) {
                  arr.push({ type: "obj", arr: [child] });
                  index++;
                } else {
                  arr.push({ type: "obj", arr: [child] });
                  index++;
                  flag = true;
                }
              }
            });

            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: 0.2,
                  paddingBottom: 0.2,
                }}
              >
                {arr.map((item, index: number) =>
                  item.type === "string" ? (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {item.arr.map((str: string, arrIndex: number) => (
                        <Text key={arrIndex} style={{ fontWeight: 300 }}>
                          {str}
                        </Text>
                      ))}
                    </div>
                  ) : (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {item.arr}
                    </div>
                  )
                )}
              </div>
            );
          },
          p(props) {
            return <Text style={{ fontWeight: 300 }}>{props.children}</Text>;
          },
          strong(props) {
            return <Text style={{ fontWeight: 900 }}>{props.children}</Text>;
          },
          a(props) {
            return <Link style={{ color: mainColor }}>{props.children}</Link>;
          },
        }}
      >
        {content}
      </Markdown>
    </Text>
  );
}