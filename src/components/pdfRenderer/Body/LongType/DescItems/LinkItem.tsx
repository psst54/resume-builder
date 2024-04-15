import { Link } from "@react-pdf/renderer";
import { styles } from "../styles";

export default function LinkItem({
  href,
  title,
  mainColor,
}: {
  href: string;
  title: string;
  mainColor: string;
}) {
  if (!href || !title) {
    return <></>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Link style={[styles.link, { color: mainColor }]} src={href}>
        {title}
      </Link>
    </div>
  );
}
