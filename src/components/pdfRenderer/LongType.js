import { Text, StyleSheet, Link } from "@react-pdf/renderer";
import { styles, color } from "./styles";
import MarkdownRenderer from "./MarkdownRenderer";

const longTypeStyles = StyleSheet.create({
  sectionContentWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  sectionContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },
  titleSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  titleText: {},
  sectionMain: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    flexBasis: 0,
    flexGrow: 1,
  },
  contentTitle: { fontSize: 12, fontWeight: 600 },
  sectionItems: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    flexGrow: 1,

    lineHeight: 1.4,
  },
  sectionItem: {
    display: "flex",
    flexDirection: "column",
    wordBreak: "keep-all",
  },
  sectionPositionText: {
    color: color.gray.standard,
    fontSize: 9,
    fontWeight: 300,
  },
  techStackList: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    flexWrap: "wrap",
  },
  techStackItem: {
    backgroundColor: color.lightGray.standard,
    lineHeight: 1.4,
    fontWeight: 300,

    borderRadius: 4,
    paddingLeft: 5,
    paddingRight: 5,
  },

  sectionSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    flexShrink: 0,

    fontWeight: 300,
  },
  dateText: {
    color: color.gray.standard,
  },
  link: {
    flexGrow: 0,
  },
});

const LongType = ({ data, mainColor }) => {
  return (
    <div style={longTypeStyles.sectionContentWrapper}>
      {data?.content?.map((content, contentIdx) => (
        <div key={contentIdx} style={longTypeStyles.sectionContent}>
          <div style={longTypeStyles.sectionMain}>
            <div style={longTypeStyles.titleSection}>
              <div style={longTypeStyles.titleText}>
                <Text style={longTypeStyles.contentTitle}>{content.title}</Text>
                <Text style={longTypeStyles.sectionPositionText}>
                  {content.position}
                </Text>
              </div>

              <div style={longTypeStyles.sectionSide}>
                <Text
                  style={{
                    color: mainColor,
                    fontSize: 9,
                    fontWeight: 200,
                    flexShrink: 0,
                  }}
                >
                  {content.location ? content.location : ""}
                </Text>
                <Text style={longTypeStyles.dateText}>{`${
                  content.start ? content.start : ""
                }${
                  content.useEndDate
                    ? ` - ${content.end ? content.end : ""}`
                    : ""
                }`}</Text>
              </div>
            </div>

            {content?.descItems?.map((descItem, descItemIdx) => {
              if (descItem.type === "tag")
                return (
                  <div key={descItemIdx} style={longTypeStyles.techStackList}>
                    {descItem.items &&
                      descItem.items.map((tagItem, tagItemIdx) => (
                        <Text
                          key={tagItemIdx}
                          style={longTypeStyles.techStackItem}
                        >
                          {tagItem}
                        </Text>
                      ))}
                  </div>
                );

              if (descItem.type === "list")
                return (
                  <div key={descItemIdx} style={longTypeStyles.sectionItems}>
                    {descItem.items &&
                      descItem.items.map((listItem, listItemIdx) => (
                        <div
                          key={listItemIdx}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Text style={longTypeStyles.sectionItem}>• </Text>
                          <div>
                            {listItem.split("\\n").map((line) => (
                              <Text>{line}</Text>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                );

              if (descItem.type === "link")
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      style={[
                        styles.disableLinkStyle,
                        longTypeStyles.link,
                        { color: mainColor },
                      ]}
                      src={descItem.url}
                    >
                      {descItem.title}
                    </Link>
                  </div>
                );

              if (descItem.type === "markdown")
                return (
                  <div key={descItemIdx} style={longTypeStyles.sectionItems}>
                    {descItem.items &&
                      descItem.items.map((listItem, listItemIdx) => (
                        <div
                          key={listItemIdx}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <MarkdownRenderer
                            content={listItem}
                            mainColor={mainColor}
                          />
                        </div>
                      ))}
                  </div>
                );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LongType;
