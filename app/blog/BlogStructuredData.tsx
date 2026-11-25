import {
  getPublishedArticles,
  getArticlePath,
  insightCategories,
} from "@/lib/insights";

const siteUrl = "https://www.indovatetechnologies.com";
const pageUrl = `${siteUrl}/blog`;

export default function BlogStructuredData() {
  const articles = getPublishedArticles();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,

      name: "Software & AI Engineering Insights",

      description:
        "Explore practical guides on software development, generative AI, enterprise RAG, SaaS, ERP, business automation and cloud engineering.",

      url: pageUrl,
      inLanguage: "en",

      isPartOf: {"@id": `${siteUrl}/#website`},

      publisher: {"@id": `${siteUrl}/#organization`},

      mainEntity: {
        "@id": `${pageUrl}#articles`,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${pageUrl}#articles`,

      name: "Indovate Engineering Insights",

      numberOfItems: articles.length,

      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",

        position: index + 1,

        item: {
          "@type": "BlogPosting",
          "@id": `${siteUrl}${getArticlePath(article.slug)}#article`,

          url: `${siteUrl}${getArticlePath(article.slug)}`,

          headline: article.title,

          description: article.excerpt,

          datePublished: article.publishedAt,

          articleSection:
            insightCategories[article.category],
        },
      })),
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
          name: "Insights",
          item: pageUrl,
        },
      ],
    },
  ];

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
