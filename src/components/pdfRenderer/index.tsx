import { Page, View, Document, Font } from "@react-pdf/renderer";
import { styles } from "./styles";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { Resume } from "@/types/resume";

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

export default function PDFPage({
  data,
  mainColor,
}: {
  data: Resume;
  mainColor: string;
}) {
  console.log(data);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageWrapper} wrap>
          <Header headerData={data.userInfo} mainColor={mainColor} />
          <Body bodyData={data.sectionList} mainColor={mainColor} />
        </View>

        <Footer />
      </Page>
    </Document>
  );
}
