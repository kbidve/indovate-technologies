import type { Metadata } from "next";
import ServicesHero from "./ServicesHero";
import ServiceDirectory from "./ServiceDirectory";
import BusinessSolutions from "./BusinessSolutions";
import EngagementModels from "./EngagementModels";
import ServicesCTA from "./ServicesCTA";
import ServicesStructuredData from "./ServicesStructuredData";

export const metadata: Metadata = {
  title: {
    absolute:
      "Software Development & AI Services | Indovate Technologies",
  },

  description:
    "Explore custom software development, generative AI, SaaS, ERP, business automation and cloud engineering services from Indovate Technologies.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Software Development & AI Services | Indovate Technologies",

    description:
      "Custom software, enterprise applications, AI solutions and technology services tailored to your business requirements.",

    url: "/services",
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
      "Software Development & AI Services | Indovate Technologies",

    description:
      "Custom software development, AI engineering, enterprise applications and business automation services.",

    images: [
      "/Images/indovatelogo.png",
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
