import { Inter, Playfair_Display } from "next/font/google";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | İnşaat, Taahhüt ve Kat Karşılığı Projeler`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "MAXVARO GROUP",
    "inşaat firması İstanbul",
    "kat karşılığı projeler",
    "konut projesi",
    "taahhüt",
    "proje geliştirme",
    "anahtar teslim",
    "Sancaktepe inşaat",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: `${site.name} | İnşaat, Taahhüt ve Kat Karşılığı Projeler`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | İnşaat ve Taahhüt`,
    description: site.description,
  },
  icons: {
    icon: "/assets/logo/maxvaro-icon.png",
    apple: "/assets/logo/maxvaro-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-ink antialiased">
        <Loader />
        <Header />
        <main className="min-h-screen pt-[72px] md:pt-[88px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
