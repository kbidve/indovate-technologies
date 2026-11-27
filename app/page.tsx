import type { Metadata } from "next";

import HomeHero from "@/components/home/HomeHero";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import TrustedClients from "@/components/home/TrustedClients";
import AICapabilityMap from "@/components/home/AICapabilityMap";
import EngineeringStrength from "@/components/home/EngineeringStrength";
import FeaturedWork from "@/components/home/FeaturedWork";
import DeliveryProcess from "@/components/home/DeliveryProcess";
import FinalCTA from "@/components/home/FinalCTA";

const title =
  "Custom Software & AI Development Company";

const description =
  "Indovate Technologies builds custom software, SaaS platforms and AI solutions for businesses worldwide. Discuss your project with our engineering team.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Indovate Technologies` },

  description,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${title} | Indovate Technologies`,
    description,
    url: "/",
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
    title: `${title} | Indovate Technologies`,
    description,
    images: [
      "/Images/indovate-brand-logo.png",
    ],
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <HomeHero />
      <WhatWeBuild />
      <FeaturedWork />
      <AICapabilityMap />
      <EngineeringStrength />
      <DeliveryProcess />
      <TrustedClients />

      <div className="iv-home-closing-cta">
        <FinalCTA />
      </div>
    </div>
  );
}
