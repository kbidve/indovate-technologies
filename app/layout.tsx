import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "lenis/dist/lenis.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import InteractiveBackground from "@/components/background/InteractiveBackground";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import StructuredData from "@/components/seo/StructuredData";
import BackgroundAudio from "@/components/audio/BackgroundAudio";

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
    default: "Indovate Technologies | Software + AI Engineering Company",
    template: "%s | Indovate Technologies",
  },
  description:
    "Indovate Technologies builds SaaS products, ERP systems, web applications, AI integrations, RAG systems, LLM applications, AI copilots, and agentic workflows.",
  applicationName: "Indovate Technologies",
  keywords: [
    "Indovate Technologies",
    "software engineering company",
    "AI engineering company",
    "SaaS development",
    "ERP development",
    "RAG development",
    "LLM applications",
    "AI copilots",
    "agentic workflows",
    "LangChain development",
    "LangGraph development",
    "cloud-native development",
    "Next.js development",
    "Django development",
    "FastAPI development",
  ],
  authors: [{ name: "Indovate Technologies" }],
  creator: "Indovate Technologies",
  publisher: "Indovate Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Indovate Technologies | Software + AI Engineering Company",
    description:
      "Software engineering and AI engineering partner for SaaS platforms, ERP systems, RAG systems, LLM apps, copilots, agentic workflows, and cloud-native product delivery.",
    type: "website",
    url: siteUrl,
    siteName: "Indovate Technologies",
    locale: "en_IN",
    images: [
      {
        url: "/Images/indovatelogo2.png",
        width: 1200,
        height: 630,
        alt: "Indovate Technologies - Software and AI Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indovate Technologies | Software + AI Engineering Company",
    description:
      "We build SaaS products, ERP platforms, AI integrations, RAG systems, LLM applications, copilots, and agentic workflows.",
    images: ["/Images/indovatelogo2.png"],
  },
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
  themeColor: "#020617",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <StructuredData />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-surface text-slate-950 dark:bg-ai-ink dark:text-slate-50`}>
        <InteractiveBackground />

        <SmoothScrollProvider>
          <div className="relative z-10 min-h-screen">
            <DarkModeToggle />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
        {/* <BackgroundAudio /> */}

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
