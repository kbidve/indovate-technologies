import type { Metadata } from "next";
import PortfolioHero from "./PortfolioHero";
import BelsioShowcase from "./BelsioShowcase";
import AICompanionShowcase from "./AICompanionShowcase";
import EngineeringWork from "./EngineeringWork";
import PortfolioCTA from "./PortfolioCTA";
import PortfolioStructuredData from "./PortfolioStructuredData";

const description = "Explore our software development portfolio, featuring representative ERP platforms, enterprise AI systems, SaaS applications and business automation.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Software & AI Engineering Portfolio | Indovate Technologies",
  },

  description,

  alternates: {
    canonical: "/portfolio",
  },

  openGraph: {
    title:
      "Software & AI Engineering Portfolio | Indovate Technologies",

    description,

    url: "/portfolio",
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
      "Software & AI Engineering Portfolio | Indovate Technologies",

    description,

    images: ["/Images/indovate-brand-logo.png"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioStructuredData />
      <PortfolioHero />
      <BelsioShowcase />
      <AICompanionShowcase />

      <EngineeringWork />
      <PortfolioCTA />
    </>
  );
}
