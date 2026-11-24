import { initialInsights } from "./insight-content";
import { additionalInsights } from "./additional-insights";

/* Blog categories */

export const insightCategories = {
  "custom-software": "Custom Software",
  "artificial-intelligence": "AI & Generative AI",
  "enterprise-ai": "RAG & Enterprise AI",
  "web-saas": "Web & SaaS",
  "enterprise-solutions": "ERP & Enterprise",
  "business-automation": "Business Automation",
  "cloud-devops": "Cloud & DevOps",
} as const;

export type InsightCategory =
  keyof typeof insightCategories;

/* Related service pages */

export type ServiceSlug =
  | "custom-software-development"
  | "ai-development"
  | "web-saas-development"
  | "enterprise-solutions"
  | "business-automation"
  | "cloud-devops";

/* Article content structure */

export type InsightSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

type InsightArticleBase = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  category: InsightCategory;
  introduction: string;
  sections: readonly InsightSection[];
  conclusion: string;
  relatedServices: readonly ServiceSlug[];
  sources?: readonly {
    label: string;
    href: string;
  }[];
};

export type DraftInsight = InsightArticleBase & {
  status: "draft";
};

export type PublishedInsight = InsightArticleBase & {
  status: "published";
  publishedAt: string;
  updatedAt?: string;
};

export type InsightArticle =
  | DraftInsight
  | PublishedInsight;

/* Content registry */

const articles: readonly InsightArticle[] = [
  ...initialInsights,
  ...additionalInsights,
];

/* Public article queries */

export function getPublishedArticles(): PublishedInsight[] {
  return articles
    .filter(
      (article): article is PublishedInsight =>
        article.status === "published"
    )
    .sort(
      (first, second) =>
        second.publishedAt.localeCompare(first.publishedAt)
    );
}

export function getPublishedArticle(
  slug: string
): PublishedInsight | undefined {
  return getPublishedArticles().find(
    article => article.slug === slug
  );
}

export function getArticlesByCategory(
  category: InsightCategory
): PublishedInsight[] {
  return getPublishedArticles().filter(
    article => article.category === category
  );
}

export function getArticlesForService(
  service: string,
  limit = 3
): PublishedInsight[] {
  return getPublishedArticles()
    .filter(article =>
      article.relatedServices.some(
        slug => slug === service
      )
    )
    .sort((first, second) =>
      Number(second.relatedServices[0] === service) -
      Number(first.relatedServices[0] === service)
    )
    .slice(0, Math.max(0, limit));
}

export function getRelatedArticles(
  article: PublishedInsight,
  limit = 3
): PublishedInsight[] {
  return getPublishedArticles()
    .filter(candidate =>
      candidate.slug !== article.slug
    )
    .map(candidate => {
      const sharedServices =
        candidate.relatedServices.filter(service =>
          article.relatedServices.includes(service)
        ).length;

      const sameCategory =
        candidate.category === article.category;

      return {
        article: candidate,
        score:
          (sameCategory ? 10 : 0) +
          sharedServices,
      };
    })
    .filter(candidate => candidate.score > 0)
    .sort((first, second) =>
      second.score - first.score
    )
    .slice(0, Math.max(0, limit))
    .map(candidate => candidate.article);
}

export function getArticlePath(slug: string): string {
  return `/blog/${slug}`;
}

export function getServicePath(slug: ServiceSlug): string {
  return `/services/${slug}`;
}

export function getReadingTime(
  article: InsightArticle
): number {
  const content = [
    article.title,
    article.introduction,
    ...article.sections.flatMap(section => [
      section.heading,
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
    article.conclusion,
  ].join(" ");

  const words = content
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length;

  return Math.max(1, Math.ceil(words / 200));
}
