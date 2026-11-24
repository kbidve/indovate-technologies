import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import CompanyOverview from "./CompanyOverview";
import EngineeringPrinciples from "./EngineeringPrinciples";
import TechnicalCapabilities from "./TechnicalCapabilities";
import GlobalCollaboration from "./GlobalCollaboration";
import AboutCTA from "./AboutCTA";
import AboutStructuredData from "./AboutStructuredData";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Indovate Technologies | Software & AI Engineering Company",
  },

  description:
    "Learn about Indovate Technologies, an India-based software and AI engineering company focused on custom software, enterprise applications and technology services for businesses worldwide.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About Indovate Technologies | Software & AI Engineering Company",

    description:
      "Discover our approach to software engineering, artificial intelligence and enterprise technology solutions.",

    url: "/about",
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
      "About Indovate Technologies | Software & AI Engineering Company",

    description:
      "An India-based software and AI engineering company working with businesses worldwide.",

    images: ["/Images/indovatelogo.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutStructuredData />
      <AboutHero />
      <CompanyOverview />

      <EngineeringPrinciples />

      <TechnicalCapabilities />
      <GlobalCollaboration />
      <AboutCTA />
    </>
  );
}
