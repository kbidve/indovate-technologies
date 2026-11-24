import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./corporate.css";
import "./theme.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";

const siteUrl = "https://www.indovatetechnologies.com";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Indovate Technologies",
    template: "%s | Indovate Technologies",
  },

  description:
    "Indovate Technologies provides custom software development, AI engineering and enterprise technology services for businesses worldwide.",

  applicationName: "Indovate Technologies",

  authors: [
    { name: "Indovate Technologies" },
  ],

  creator: "Indovate Technologies",
  publisher: "Indovate Technologies",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0f172a",
    },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-surface text-slate-950 dark:bg-ai-ink dark:text-slate-50`}>

          <div className="relative z-10 min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-640ZXWNRHC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-640ZXWNRHC');
          `}
        </Script>
      </body>
    </html>
  );
}
