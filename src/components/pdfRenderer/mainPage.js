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

const contactBaseData = {
  phone: {
    imgUrl: "/phone.png",
  },
  email: {
    isLink: true,
    baseUrl: "mailto:",
    imgUrl: "/email.png",
  },
  homepage: {
    isLink: true,
    baseUrl: "https://",
    imgUrl: "/homepage.png",
  },
  github: {
    isLink: true,
    baseUrl: "https://github.com/",
    imgUrl: "/github.png",
  },
  gitlab: {
    isLink: true,
    baseUrl: "https://gitlab.com/",
  },
  stackoverflow: {
    isLink: true,
    baseUrl: "https://stackoverflow.com/users/",
  },
  linkedin: {
    isLink: true,
    baseUrl: "https://www.linkedin.com/in/",
  },
  twitter: {
    isLink: true,
    baseUrl: "https://twitter.com/",
  },
  reddit: {
    isLink: true,
    baseUrl: "https://www.reddit.com/user/",
  },
};

Font.register({
  family: "Pretendard-PDF",
  fonts: [
    {
      src: "./fonts/Pretendard-Thin.ttf",
      format: "truetype",
      fontWeight: 100,
    },
    {
      src: "./fonts/Pretendard-ExtraLight.ttf",
      format: "truetype",
      fontWeight: 200,
    },
    {
      src: "./fonts/Pretendard-Light.ttf",
      format: "truetype",
      fontWeight: 300,
    },
    {
      src: "./fonts/Pretendard-Regular.ttf",
      format: "truetype",
      fontWeight: 400,
    },
    {
      src: "./fonts/Pretendard-Medium.ttf",
      format: "truetype",
      fontWeight: 500,
    },
    {
      src: "./fonts/Pretendard-SemiBold.ttf",
      format: "truetype",
      fontWeight: 600,
    },
  ],
});

const PDFPage = ({ data, mainColor }) => {
  const monthData = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const formatDate = ({ dateObj }) => {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    return monthData[month] + " " + date + ", " + year;
  };

  const nameList = data?.header?.name ? data?.header?.name.split(" ") : [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <div style={styles.pageWrapper}>
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
                    {contactBaseData[contactItem.type].imgUrl && (
                      <Image
                        src={contactBaseData[contactItem.type].imgUrl}
                        style={styles.contactItemIcon}
                      />
                    )}
                    <Text style={styles.contactText}>
                      {contactBaseData[contactItem.type]?.isLink && (
                        <Link
                          style={styles.disableLinkStyle}
                          src={
                            contactBaseData[contactItem.type]?.baseUrl +
                            contactItem.text
                          }
                        >
                          {contactItem.text}
                        </Link>
                      )}
                      {!contactBaseData[contactItem.type]?.isLink &&
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
          <div style={styles.sections}>
            {data &&
              data.body &&
              data.body.map((datum, datumIdx) => (
                <SectionRenderer
                  key={datumIdx}
                  data={datum}
                  mainColor={mainColor}
                />
              ))}
          </div>
        </div>

        <View style={styles.footer} fixed>
          <Text style={styles.pageNumber}>
            {formatDate({ dateObj: new Date() })}
          </Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
};

export default PDFPage;
