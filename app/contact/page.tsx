import type { Metadata } from "next";
import ContactHero from "./ContactHero";
import ContactInformation from "./ContactInformation";
import ContactStructuredData from "./ContactStructuredData";
import Contact from "@/components/Contact";

const description = "Contact Indovate Technologies to discuss custom software development, enterprise systems, AI integration, SaaS platforms and technology projects.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact Us | Software & AI Projects | Indovate Technologies",
  },

  description,

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact Us | Software & AI Projects | Indovate Technologies",

    description,

    url: "/contact",
    siteName: "Indovate Technologies",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/Images/indovate-brand-logo.png",
        alt: "Indovate Technologies",
      },
    ],
  },

  twitter: {
    card: "summary",

    title:
      "Contact Us | Software & AI Projects | Indovate Technologies",

    description,

    images: ["/Images/indovate-brand-logo.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactStructuredData />
      <ContactHero />
      <ContactInformation />

      <Contact />
    </>
  );
}
