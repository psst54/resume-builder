import { Text, Link, Image } from "@react-pdf/renderer";

import { CONTACT_DATA } from "../data";
import { styles } from "./styles";
import { Contact } from "@/types/resume";

function ContactItem({
  contactItem,
  mainColor,
}: {
  contactItem: Contact;
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
          src={CONTACT_DATA[contactItem.type]?.baseUrl + contactItem.content}
        >
          {contactItem.content}
        </Link>
      ) : (
        <Text style={{ height: 12 }}>{contactItem.content}</Text>
      )}
    </div>
  );
}

export default function Contact({
  contactItems,
  mainColor,
}: {
  contactItems: Contact[];
  mainColor: string;
}) {
  if (!contactItems) {
    return <></>;
  }

  return (
    <div style={styles.contactSection}>
      {contactItems?.map((contactItem: Contact, contactItemIndex: number) => (
        <div key={contactItemIndex} style={styles.contactItemWrapper}>
          {contactItemIndex !== 0 && (
            <Text style={styles.contactDivider}>|</Text>
          )}
          <ContactItem contactItem={contactItem} mainColor={mainColor} />
        </div>
      ))}
    </div>
  );
}
