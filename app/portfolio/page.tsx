import Section from "@/components/Section";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Portfolio — Indovate Technologies",
  description: "See hand-picked projects by Indovate Technologies, showcasing our range in web, app, SaaS, and enterprise solutions.",
  openGraph: {
    title: "Portfolio — Indovate Technologies",
    description: "See hand-picked projects by Indovate Technologies, showcasing our range in web, app, SaaS, and enterprise solutions.",
    type: "website",
    url: "https://www.indovatetechnologies.com/portfolio",
    images: [
      {
        url: "/Images/indovatelogo.png",
        width: 400,
        height: 400,
        alt: "Indovate Technologies Logo"
      }
    ]
  },
  alternates: {
    canonical: "https://www.indovatetechnologies.com/portfolio"
  }
};

export default function PortfolioPage(){
  return (
    <Section title="Portfolio" intro="Hand‑picked projects that show our range.">
      <Portfolio />
    </Section>
  );
}
