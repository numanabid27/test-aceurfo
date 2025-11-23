import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/common/components/header/header";
import Footer from "@/common/components/footer/footer";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
});

export const metadata = {
  title: {
    default: "AccureCFO - Professional Bookkeeping & Financial Services",
    template: "%s | AccureCFO"
  },
  description: "Maintain financial records and handle bookkeeping professionally with AccureCFO. We manage business finances that welcome success. Services include bookkeeping, financial reporting, cash flow management, QuickBooks, and Xero integration.",
  keywords: [
    "bookkeeping services",
    "financial reporting",
    "cash flow management",
    "QuickBooks",
    "Xero",
    "accounting services",
    "financial management",
    "business bookkeeping",
    "payables receivables",
    "software implementation",
    "CFO services",
    "financial consulting"
  ],
  authors: [{ name: "AccureCFO" }],
  creator: "AccureCFO",
  publisher: "AccureCFO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: 'https://accurecfo.com',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: 'https://accurecfo.com',
    siteName: "AccureCFO",
    title: "AccureCFO - Professional Bookkeeping & Financial Services",
    description: "Maintain financial records and handle bookkeeping professionally with AccureCFO. We manage business finances that welcome success.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AccureCFO - Professional Bookkeeping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AccureCFO - Professional Bookkeeping & Financial Services",
    description: "Maintain financial records and handle bookkeeping professionally with AccureCFO. We manage business finances that welcome success.",
    images: ["/og-image.jpg"],
    creator: "@accurecfo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.variable}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
