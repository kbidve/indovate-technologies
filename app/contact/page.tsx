import type { Metadata } from "next";
import ContactHero from "./ContactHero";
import ContactInformation from "./ContactInformation";
import ContactStructuredData from "./ContactStructuredData";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact Us | Software & AI Projects | Indovate Technologies",
  },

  description:
    "Contact Indovate Technologies to discuss custom software development, enterprise systems, AI integration, SaaS platforms and technology projects.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact Us | Software & AI Projects | Indovate Technologies",

    description:
      "Discuss your software development, enterprise technology or AI project with Indovate Technologies.",

    url: "/contact",
    siteName: "Indovate Technologies",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/Images/indovatelogo.png",
        alt: "Indovate Technologies",
      },
    ],
  },

  twitter: {
    card: "summary",

    title:
      "Contact Us | Software & AI Projects | Indovate Technologies",

    description:
      "Connect with Indovate Technologies to discuss your next software or artificial intelligence project.",

    images: ["/Images/indovatelogo.png"],
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
