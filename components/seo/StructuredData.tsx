const siteUrl = "https://www.indovatetechnologies.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Indovate Technologies",
  url: siteUrl,
  logo: `${siteUrl}/Images/indovatelogo.png`,
  description:
    "Indovate Technologies is a software engineering and AI engineering company building SaaS products, ERP systems, web applications, RAG systems, LLM applications, AI copilots, agentic workflows, and enterprise integrations.",
  email: "kailas.bidve@indovatetechnologies.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd floor, Shinde heights, Khori Galli, Vasant Nagar, Sawe Wadi",
    addressLocality: "Latur",
    addressRegion: "Maharashtra",
    postalCode: "413531",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/indovate-technologies",
    "https://www.instagram.com/indovate_tech/",
    "https://www.facebook.com/people/Indovate-Technologies/61580359829668/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Indovate Technologies",
  url: siteUrl,
  description:
    "Software engineering and AI engineering partner for SaaS, ERP, RAG, LLM applications, AI copilots, agentic workflows, and cloud-native product delivery.",
  publisher: {
    "@type": "Organization",
    name: "Indovate Technologies",
    url: siteUrl,
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Indovate Technologies",
  url: siteUrl,
  image: `${siteUrl}/Images/indovatelogo2.png`,
  description:
    "Software and AI engineering services for SaaS platforms, ERP systems, web applications, RAG systems, LLM apps, AI copilots, agentic workflows, integrations, DevOps, and cloud deployment.",
  areaServed: ["India", "United States", "United Kingdom", "Germany", "Australia", "United Arab Emirates"],
  serviceType: [
    "SaaS Product Development",
    "ERP Development",
    "Web Application Development",
    "AI Integration",
    "RAG System Development",
    "LLM Application Development",
    "Agentic Workflow Development",
    "Cloud and DevOps Engineering",
    "API Development and Integration",
  ],
  address: organizationSchema.address,
};

export default function StructuredData() {
  const graph = [organizationSchema, websiteSchema, professionalServiceSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
