import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
