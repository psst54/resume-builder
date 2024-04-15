import { Page, View, Document, Font } from "@react-pdf/renderer";
import { styles } from "./styles";
import SectionRenderer from "./SectionRenderer";
import Header from "./Header";
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
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageWrapper} wrap>
          <Header headerData={data.header} mainColor={mainColor} />

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
