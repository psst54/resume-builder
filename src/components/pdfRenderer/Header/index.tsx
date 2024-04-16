import { Name } from "./Name";
import Position from "./Position";
import Contact from "./Contact";

import { styles } from "./styles";
import Quote from "./Quote";

export default function Header({
  headerData,
  mainColor,
}: {
  mainColor: string;
  headerData: any; // [todo] define type
}) {
  if (!headerData) {
    return <></>;
  }

  return (
    <div style={styles.container}>
      <Name name={headerData.name} />
      <Position position={headerData.position} mainColor={mainColor} />
      <Contact contactItems={headerData.contactItems} mainColor={mainColor} />
      <Quote quote={headerData.quote} />
    </div>
  );
}
