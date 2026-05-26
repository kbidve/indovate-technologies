import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

export const metadata: Metadata = {
  title: "Indovate Technologies",
  description: "your complete IT partner for digital success, offering web and app development, debugging, hosting, maintenance, SEO, ERP, and AI/LLM training.",
  openGraph: {
    title: "Indovate Technologies",
    description: "your complete IT partner for digital success, offering web and app development, debugging, hosting, maintenance, SEO, ERP, and AI/LLM training.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="your complete IT partner for digital success, offering web and app development, debugging, hosting, maintenance, SEO, ERP, and AI/LLM training." />
        <link rel="canonical" href="https://www.indovatetechnologies.com/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta property="og:title" content="Indovate Technologies" />
        <meta property="og:description" content="your complete IT partner for digital success, offering web and app development, debugging, hosting, maintenance, SEO, ERP, and AI/LLM training." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.indovatetechnologies.com/" />
        <meta property="og:image" content="/Images/indovatelogo.png" />

         <script async src="https://www.googletagmanager.com/gtag/js?id=G-640ZXWNRHC"></script>
         <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-640ZXWNRHC');
              `,
            }}
        />

      </head>
      <body className="bg-gradient-to-b from-white to-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <DarkModeToggle />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
