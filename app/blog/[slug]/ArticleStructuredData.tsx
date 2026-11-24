import {
  getArticlePath,
  insightCategories,
  type PublishedInsight,
} from "@/lib/insights";

const siteUrl = "https://www.indovatetechnologies.com";

type ArticleStructuredDataProps = {
  article: PublishedInsight;
};

const organization = {
  "@type": "Organization",
  name: "Indovate Technologies",
  url: siteUrl,
};

export default function ArticleStructuredData({
  article,
}: ArticleStructuredDataProps) {
  const pageUrl =
    `${siteUrl}${getArticlePath(article.slug)}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,

      url: pageUrl,

      headline: article.title,

      description: article.excerpt,

      inLanguage: "en",

      articleSection:
        insightCategories[article.category],

      datePublished: article.publishedAt,

      ...(article.updatedAt
        ? { dateModified: article.updatedAt }
        : {}),

      author: organization,

      publisher: {
        ...organization,

        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/Images/indovatelogo.png`,
        },
      },

      mainEntityOfPage: {
        "@id": `${pageUrl}#webpage`,
      },

      ...(article.sources?.length
        ? {
            citation: article.sources.map(source => ({
              "@type": "CreativeWork",
              name: source.label,
              url: source.href,
            })),
          }
        : {}),
    },

    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,

      url: pageUrl,
      name: article.title,
      description: article.seoDescription,
      inLanguage: "en",

      mainEntity: {
        "@id": `${pageUrl}#article`,
      },

      isPartOf: {
        "@id": `${siteUrl}/blog#webpage`,
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
          name: "Insights",
          item: `${siteUrl}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
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
