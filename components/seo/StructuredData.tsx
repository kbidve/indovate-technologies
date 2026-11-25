const siteUrl = "https://www.indovatetechnologies.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Indovate Technologies",
  url: siteUrl,
  logo: `${siteUrl}/Images/indovate-brand-logo.png`,
  description:
    "Indovate Technologies is a software engineering and AI engineering company building SaaS products, ERP systems, web applications, RAG systems, LLM applications, AI copilots, agentic workflows, and enterprise integrations.",
  email: "kailas.bidve@indovatetechnologies.com",

  contactPoint: {
    "@type": "ContactPoint",
    email: "kailas.bidve@indovatetechnologies.com",
    contactType: "business inquiries",
    availableLanguage: "English",
  },
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
  "@id": `${siteUrl}/#website`,
  name: "Indovate Technologies",
  url: siteUrl,
  description:
    "Software engineering and AI engineering partner for SaaS, ERP, RAG, LLM applications, AI copilots, agentic workflows, and cloud-native product delivery.",
  publisher: {"@id": `${siteUrl}/#organization`},
};


export default function StructuredData() {
  const graph = [organizationSchema, websiteSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
