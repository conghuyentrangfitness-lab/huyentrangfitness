import type { Metadata, Viewport } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  variable: "--font-google-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.conghuyentrangfitness.com"),
  title: "FITNESS x FIT CLUB // Tăng Cơ — Giảm Mỡ — Độ Body",
  description:
    "Hệ thống rèn luyện vóc dáng chuyên biệt cho phái đẹp: tăng cơ, giảm mỡ, độ body, rãnh bụng số 11, nâng mông quả đào, 100% êm ái bảo vệ khớp gối.",
  keywords: [
    "FITNESS x FIT CLUB",
    "Fit Club",
    "Tăng cơ giảm mỡ",
    "Độ body",
    "Kháng lực trên thảm",
    "Thắt eo rãnh 11",
    "Nâng mông quả đào không to đùi",
    "Các gói tập",
  ],
  alternates: {
    canonical: "https://www.conghuyentrangfitness.com",
  },
  openGraph: {
    title: "FITNESS x FIT CLUB",
    description:
      "Tăng cơ — Giảm mỡ — Độ body. Điêu khắc đường cong đồng hồ cát cho phái đẹp.",
    url: "https://www.conghuyentrangfitness.com",
    siteName: "FITNESS x FIT CLUB",
    locale: "vi_VN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${googleSans.variable}`}>
      <body className="antialiased bg-[#FAF7F2] text-[#24211D] selection:bg-[#E8D4C8] selection:text-[#1A1815]">
        {children}
      </body>
    </html>
  );
}
