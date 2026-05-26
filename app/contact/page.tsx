import Section from "@/components/Section";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact — Indovate Technologies",
  description: "Contact Indovate Technologies for a free consultation or project quote. We respond within 24 hours.",
  openGraph: {
    title: "Contact — Indovate Technologies",
    description: "Contact Indovate Technologies for a free consultation or project quote. We respond within 24 hours.",
    type: "website",
    url: "https://www.indovatetechnologies.com/contact",
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
    canonical: "https://www.indovatetechnologies.com/contact"
  }
};

export default function ContactPage(){
  return (
    <Section title="Contact" intro="Tell us about your project and we’ll get back within 24 hours.">
      <Contact />
    </Section>
  );
}
