import type { Metadata } from "next";

import { getPublishedArticles } from "@/lib/insights";

import BlogHero from "./BlogHero";
import BlogStructuredData from "./BlogStructuredData";
import BlogListing from "./BlogListing";
import BlogCTA from "./BlogCTA";

const hasPublishedArticles =
  getPublishedArticles().length > 0;

const description = "Explore practical guides on software development, generative AI, enterprise RAG, SaaS, ERP, business automation and cloud engineering.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Software & AI Engineering Insights | Indovate Technologies",
  },

  description,

  alternates: {
    canonical: "/blog",
  },

  robots: {
    index: hasPublishedArticles,
    follow: true,
  },

  openGraph: {
    title:
      "Software & AI Engineering Insights | Indovate Technologies",

    description,

    url: "/blog",
    siteName: "Indovate Technologies",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/Images/indovate-brand-logo.png",
        alt: "Indovate Technologies",
      },
    ],
  },

  twitter: {
    card: "summary",

    title:
      "Software & AI Engineering Insights | Indovate Technologies",

    description,

    images: ["/Images/indovate-brand-logo.png"],
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogStructuredData />
      <BlogHero />
      <BlogListing />
      <BlogCTA />
    </>
  );
}
