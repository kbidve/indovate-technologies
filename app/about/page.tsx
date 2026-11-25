import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import CompanyOverview from "./CompanyOverview";
import EngineeringPrinciples from "./EngineeringPrinciples";
import TechnicalCapabilities from "./TechnicalCapabilities";
import GlobalCollaboration from "./GlobalCollaboration";
import AboutCTA from "./AboutCTA";
import AboutStructuredData from "./AboutStructuredData";

const description = "Indovate Technologies is an India-based software and AI engineering company providing custom software and enterprise technology services worldwide.";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Indovate Technologies | Software & AI Engineering Company",
  },

  description,

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About Indovate Technologies | Software & AI Engineering Company",

    description,

    url: "/about",
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
      "About Indovate Technologies | Software & AI Engineering Company",

    description,

    images: ["/Images/indovate-brand-logo.png"],
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
