import type { MetadataRoute } from "next";

import {
  getPublishedArticles,
  getArticlePath,
} from "@/lib/insights";

const siteUrl =
  "https://www.indovatetechnologies.com";

const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/portfolio",
  "/services",
  "/services/custom-software-development",
  "/services/ai-development",
  "/services/web-saas-development",
  "/services/enterprise-solutions",
  "/services/business-automation",
  "/services/cloud-devops"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getPublishedArticles();

  const routes = [
    ...staticRoutes,
    ...(articles.length > 0 ? ["/blog"] : []),
    ...articles.map(article =>
      getArticlePath(article.slug)
    ),
  ];

  return [...new Set(routes)].map(route => ({
    url: siteUrl + route,
  }));
}
