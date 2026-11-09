import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Noto_Sans_Gujarati,
  Noto_Serif_Gujarati,
} from "next/font/google";
import "./globals.css";

const notoGujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-gujarati",
  display: "swap",
});

const notoSerifGujarati = Noto_Serif_Gujarati({
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-gujarati",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "નવા વર્ષના રામ રામ • Happy New Year ",
  description:
    "નવા વર્ષના રામ રામ — Happy New Year . With love, respect and best wishes, Khushal Nadiyapara & Family.",
  openGraph: {
    title: "નવા વર્ષના રામ રામ | Happy New Year",
    description:
      "Heartfelt New Year blessings from Khushal Nadiyapara & Family.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#100D0A",
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
    <html
      lang="gu"
      className={`${notoGujarati.variable} ${notoSerifGujarati.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-display">{children}</body>
    </html>
  );
}
