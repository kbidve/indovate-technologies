import type { Metadata } from "next";
import ServicesHero from "./ServicesHero";
import ServiceDirectory from "./ServiceDirectory";
import BusinessSolutions from "./BusinessSolutions";
import EngagementModels from "./EngagementModels";
import ServicesCTA from "./ServicesCTA";
import ServicesStructuredData from "./ServicesStructuredData";

const description = "Explore software development and AI services, including custom applications, SaaS products, ERP systems, business automation and cloud engineering.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Software Development & AI Services | Indovate Technologies",
  },

  description,

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Software Development & AI Services | Indovate Technologies",

    description,

    url: "/services",
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
      "Software Development & AI Services | Indovate Technologies",

    description,

    images: [
      "/Images/indovate-brand-logo.png",
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesStructuredData />
      <ServicesHero />

      <ServiceDirectory />
      <BusinessSolutions />

      <EngagementModels />
      <ServicesCTA />
    </>
  );
}
