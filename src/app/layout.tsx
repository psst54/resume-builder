import "./globals.css";
import { Providers } from "@redux/provider";

export const metadata = {
  title: "Resume builder",
  description: "Build your resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
