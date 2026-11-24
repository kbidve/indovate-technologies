import type { Metadata } from "next";
import PortfolioHero from "./PortfolioHero";
import BelsioShowcase from "./BelsioShowcase";
import AICompanionShowcase from "./AICompanionShowcase";
import EngineeringWork from "./EngineeringWork";
import PortfolioCTA from "./PortfolioCTA";
import PortfolioStructuredData from "./PortfolioStructuredData";

export const metadata: Metadata = {
  title: {
    absolute:
      "Software & AI Engineering Portfolio | Indovate Technologies",
  },

  description:
    "Explore Indovate Technologies' representative work across custom ERP platforms, enterprise AI, SaaS applications and business automation.",

  alternates: {
    canonical: "/portfolio",
  },

  openGraph: {
    title:
      "Software & AI Engineering Portfolio | Indovate Technologies",

    description:
      "Explore our work across enterprise software, AI systems, digital products and business automation.",

    url: "/portfolio",
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
      "Software & AI Engineering Portfolio | Indovate Technologies",

    description:
      "Representative enterprise software, AI and digital product engineering work.",

    images: ["/Images/indovatelogo.png"],
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
