import {
  Page,
  Text,
  View,
  Document,
  Font,
  Link,
  Image,
} from "@react-pdf/renderer";
import { styles } from "./styles";
import SectionRenderer from "./SectionRenderer";
import { CONTACT_DATA } from "./data";
import Footer from "./Footer";

Font.register({
  family: "Pretendard-PDF",
  fonts: [
    {
      src: "/fonts/Pretendard-Thin.ttf",
      format: "truetype",
      fontWeight: 100,
    },
    {
      src: "/fonts/Pretendard-ExtraLight.ttf",
      format: "truetype",
      fontWeight: 200,
    },
    {
      src: "/fonts/Pretendard-Light.ttf",
      format: "truetype",
      fontWeight: 300,
    },
    {
      src: "/fonts/Pretendard-Regular.ttf",
      format: "truetype",
      fontWeight: 400,
    },
    {
      src: "/fonts/Pretendard-Medium.ttf",
      format: "truetype",
      fontWeight: 500,
    },
    {
      src: "/fonts/Pretendard-SemiBold.ttf",
      format: "truetype",
      fontWeight: 600,
    },
  ],
});

Font.registerEmojiSource({
  format: "png",
  url: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/",
});

export default function PDFPage({ data, mainColor }: { mainColor: string }) {
  const nameList = data?.header?.name ? data?.header?.name.split(" ") : [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageWrapper} wrap>
          <div style={styles.header}>
            {data?.header?.name ? (
              <Text style={styles.userName}>
                {data?.header?.name
                  ? nameList.slice(0, nameList.length - 1).join(" ")
                  : "Untitled"}{" "}
                <Text style={styles.userNameBold}>
                  {data?.header?.name ? nameList[nameList.length - 1] : ""}
                </Text>
              </Text>
            ) : (
              <Text style={styles.userName}>Untitled</Text>
            )}

            <Text
              style={{
                fontSize: 12,
                fontWeight: 300,
                color: mainColor,
              }}
            >
              {data?.header?.position ? data?.header?.position : "POSITION"}
            </Text>
            <div style={styles.contactSection}>
              {data?.header?.contactItems?.map(
                (contactItem, contactItemIdx) => (
                  <>
                    {contactItemIdx !== 0 && (
                      <Text style={styles.contactText}>|</Text>
                    )}
                    {CONTACT_DATA[contactItem.type].imgUrl && (
                      <Image
                        src={CONTACT_DATA[contactItem.type].imgUrl}
                        style={styles.contactItemIcon}
                      />
                    )}
                    <Text style={styles.contactText}>
                      {CONTACT_DATA[contactItem.type]?.isLink && (
                        <Link
                          style={[
                            styles.disableLinkStyle,
                            { color: mainColor },
                          ]}
                          src={
                            CONTACT_DATA[contactItem.type]?.baseUrl +
                            contactItem.text
                          }
                        >
                          {contactItem.text}
                        </Link>
                      )}
                      {!CONTACT_DATA[contactItem.type]?.isLink &&
                        contactItem.text}
                    </Text>
                  </>
                )
              )}
            </div>

            {data?.header?.quote && (
              <Text style={styles.quote}>{data?.header?.quote}</Text>
            )}
          </div>
          <View style={styles.sections}>
            {data &&
              data.body &&
              data.body.map((datum, datumIdx) => (
                <SectionRenderer
                  key={datumIdx}
                  data={datum}
                  mainColor={mainColor}
                />
              ))}
          </View>
        </View>

        <Footer />
      </Page>
    </Document>
  );
}
