import Hero3DSection from "@/components/home/Hero3DSection";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import TrustedClients from "@/components/home/TrustedClients";
import AICapabilityMap from "@/components/home/AICapabilityMap";
import EngineeringStrength from "@/components/home/EngineeringStrength";
import FeaturedWork from "@/components/home/FeaturedWork";
import DeliveryProcess from "@/components/home/DeliveryProcess";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Hero3DSection />
      <WhatWeBuild />
      <AICapabilityMap />
      <EngineeringStrength />
      <FeaturedWork />
      <DeliveryProcess />
      <FinalCTA />
      <TrustedClients />
    </div>
  );
}
