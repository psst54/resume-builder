import { Text, Link, Image } from "@react-pdf/renderer";

import { CONTACT_DATA } from "../data";
import { styles } from "./styles";
import { ContactItemType } from "@/types/resume";

function ContactItem({
  contactItem,
  mainColor,
}: {
  contactItem: ContactItemType;
  mainColor: string;
}) {
  const imageUrl = CONTACT_DATA[contactItem.type].imgUrl;
  const isLink = CONTACT_DATA[contactItem.type].isLink;

  return (
    <div style={styles.contactItem}>
      {imageUrl && <Image src={imageUrl} style={styles.contactIcon} />}
      {isLink ? (
        <Link
          style={{ color: mainColor, height: 12 }}
          src={CONTACT_DATA[contactItem.type]?.baseUrl + contactItem.text}
        >
          {contactItem.text}
        </Link>
      ) : (
        <Text style={{ height: 12 }}>{contactItem.text}</Text>
      )}
    </div>
  );
}

export default function Contact({
  contactItems,
  mainColor,
}: {
  contactItems: ContactItemType[];
  mainColor: string;
}) {
  if (!contactItems) {
    return <></>;
  }

  return (
    <div style={styles.contactSection}>
      {contactItems?.map(
        (contactItem: ContactItemType, contactItemIdx: number) => (
          <div style={styles.contactItemWrapper}>
            {contactItemIdx !== 0 && (
              <Text style={styles.contactDivider}>|</Text>
            )}
            <ContactItem contactItem={contactItem} mainColor={mainColor} />
          </div>
        )
      )}
    </div>
  );
}
