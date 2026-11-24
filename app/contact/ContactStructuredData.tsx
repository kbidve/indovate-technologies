const siteUrl = "https://www.indovatetechnologies.com";
const pageUrl = `${siteUrl}/contact`;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}#webpage`,

    name: "Contact Indovate Technologies",

    description:
      "Contact Indovate Technologies to discuss custom software development, enterprise systems, AI integration, SaaS platforms and technology projects.",

    url: pageUrl,

    inLanguage: "en",

    mainEntity: {
      "@type": "Organization",
      name: "Indovate Technologies",
      url: siteUrl,

      contactPoint: {
        "@type": "ContactPoint",
        email: "kailas.bidve@indovatetechnologies.com",
        contactType: "business inquiries",
        availableLanguage: "English",
      },
    },

    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: pageUrl,
      },
    ],
  },
];

export default function ContactStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas)
          .replace(/</g, "\\u003c"),
      }}
    />
  );
}
