import type { Metadata } from "next";

import { getPublishedArticles } from "@/lib/insights";

import BlogHero from "./BlogHero";
import BlogStructuredData from "./BlogStructuredData";
import BlogListing from "./BlogListing";
import BlogCTA from "./BlogCTA";

const hasPublishedArticles =
  getPublishedArticles().length > 0;

export const metadata: Metadata = {
  title: {
    absolute:
      "Software & AI Engineering Insights | Indovate Technologies",
  },

  description:
    "Explore insights on custom software development, generative AI, enterprise systems, SaaS platforms, business automation and cloud engineering.",

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

    description:
      "Practical technology insights for businesses exploring software development, artificial intelligence and digital transformation.",

    url: "/blog",
    siteName: "Indovate Technologies",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/Images/indovatelogo.png",
        alt: "Indovate Technologies",
      },
    ],
  },

  twitter: {
    card: "summary",

    title:
      "Software & AI Engineering Insights | Indovate Technologies",

    description:
      "Explore practical perspectives on software engineering, enterprise technology and artificial intelligence.",

    images: ["/Images/indovatelogo.png"],
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
