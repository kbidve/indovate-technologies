const siteUrl = "https://www.indovatetechnologies.com";
const pageUrl = `${siteUrl}/about`;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,

    name: "About Indovate Technologies",

    description:
      "Learn about Indovate Technologies, an India-based software and AI engineering company focused on custom software, enterprise applications and technology services for businesses worldwide.",

    url: pageUrl,

    inLanguage: "en",

    about: {
      "@type": "Organization",
      name: "Indovate Technologies",
      url: siteUrl,
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
        name: "About Us",
        item: pageUrl,
      },
    ],
  },
];

export default function AboutStructuredData() {
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
