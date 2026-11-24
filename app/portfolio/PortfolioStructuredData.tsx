const siteUrl = "https://www.indovatetechnologies.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

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
      name: "Our Work",
      item: `${siteUrl}/portfolio`,
    },
  ],
};

export default function PortfolioStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          breadcrumbSchema
        ).replace(/</g, "\\u003c"),
      }}
    />
  );
}
