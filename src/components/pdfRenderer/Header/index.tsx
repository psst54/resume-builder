import { Name } from "./Name";
import Position from "./Position";
import Contact from "./Contact";

import { styles } from "./styles";
import Quote from "./Quote";
import { ResumeUserInfo } from "@/types/resume";

export default function Header({
  headerData,
  mainColor,
}: {
  mainColor: string;
  headerData: ResumeUserInfo;
}) {
  if (!headerData) {
    return <></>;
  }

  return (
    <div style={styles.container}>
      <Name name={headerData.name} />
      <Position position={headerData.position} mainColor={mainColor} />
      <Contact contactItems={headerData.contact} mainColor={mainColor} />
      <Quote quote={headerData.quote} />
    </div>
  );
}
