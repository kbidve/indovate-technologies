import Section from "@/components/Section";
import Services from "@/components/Services";

export const metadata = {
  title: "Services — Indovate Technologies",
  description: "Explore all IT services by Indovate Technologies: web/app development, ERP, SaaS, cloud, API, UI/UX, SEO, and more.",
  openGraph: {
    title: "Services — Indovate Technologies",
    description: "Explore all IT services by Indovate Technologies: web/app development, ERP, SaaS, cloud, API, UI/UX, SEO, and more.",
    type: "website",
    url: "https://www.indovatetechnologies.com/services",
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
    canonical: "https://www.indovatetechnologies.com/services"
  }
};

export default function ServicesPage() {
  return (
    <Section title="Services" intro="Everything you need to launch and grow online.">
      <Services />
    </Section>
  );
}
