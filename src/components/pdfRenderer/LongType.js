import { Text, StyleSheet, Link } from "@react-pdf/renderer";
import { styles, color } from "./styles";

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
  sectionMain: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    flexBasis: 0,
    flexGrow: 1,
  },
  contentTitle: { fontSize: 12, fontWeight: 500 },
  sectionItems: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    flexGrow: 1,

    lineHeight: 1.4,
  },
  sectionItem: { wordBreak: "keep-all" },
  sectionPositionText: { color: color.gray, fontSize: 9, fontWeight: 300 },
  techStackList: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    flexWrap: "wrap",
  },
  techStackItem: {
    backgroundColor: color.lightGray,
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
    color: color.gray,
  },
});

const LongType = ({ data, mainColor }) => {
  return (
    <div style={longTypeStyles.sectionContentWrapper}>
      {data?.content?.map((content, contentIdx) => (
        <div key={contentIdx} style={longTypeStyles.sectionContent}>
          <div style={longTypeStyles.sectionMain}>
            <Text style={longTypeStyles.contentTitle}>{content.title}</Text>
            <Text style={longTypeStyles.sectionPositionText}>
              {content.position}
            </Text>

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
                        <Text
                          key={listItemIdx}
                          style={longTypeStyles.sectionItem}
                        >
                          • {listItem}
                        </Text>
                      ))}
                  </div>
                );

              if (descItem.type === "link")
                return (
                  <Link
                    style={[styles.disableLinkStyle, { color: mainColor }]}
                    src={descItem.url}
                  >
                    {descItem.title}
                  </Link>
                );
            })}
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
              content.useEndDate ? ` - ${content.end ? content.end : ""}` : ""
            }`}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LongType;
