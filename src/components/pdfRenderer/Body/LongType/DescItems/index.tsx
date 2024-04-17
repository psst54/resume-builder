import TagItems from "./TagItems";
import ListItems from "./ListItems";
import LinkItem from "./LinkItem";
import MarkdownItem from "./MarkdownItem";

export default function DescItems({
  descItems,
  mainColor,
}: {
  descItems: any; // [todo] define type
  mainColor: string;
}) {
  if (!descItems) {
    return <></>;
  }

  return descItems.map(
    (
      descItem: any, // [todo] define type
      descItemIndex: number
    ) => {
      switch (descItem.type) {
        case "tag": {
          return <TagItems key={descItemIndex} items={descItem.items} />;
        }

        case "list": {
          return <ListItems key={descItemIndex} items={descItem.items} />;
        }

        case "link": {
          return (
            <LinkItem
              key={descItemIndex}
              href={descItem.url}
              title={descItem.title}
              mainColor={mainColor}
            />
          );
        }

        case "markdown": {
          return (
            <MarkdownItem
              key={descItemIndex}
              content={descItem.items[0]}
              mainColor={mainColor}
            />
          );
        }

        default: {
          return <></>;
        }
      }
    }
  );
}
