import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { Metadata } from "next";

import RelatedInsights from "./RelatedInsights";
import ServiceBuyerGuide from "./ServiceBuyerGuide";

import styles from "./ServicePage.module.css";

const siteUrl = "https://www.indovatetechnologies.com";

export type ServicePageData = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  introduction: string;
  offerings: {
    title: string;
    description: string;
  }[];
  useCases: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  relatedServices: {
    name: string;
    href: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
};

export function createServiceMetadata(
  service: ServicePageData
): Metadata {
  const title =
    `${service.seoTitle} | Indovate Technologies`;

  const url = `/services/${service.slug}`;

  return {
    title: { absolute: title },

    description: service.seoDescription,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description: service.seoDescription,
      url,
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
      title,
      description: service.seoDescription,
      images: ["/Images/indovate-brand-logo.png"],
    },
  };
}

export default function ServicePage({
  service,
}: {
  service: ServicePageData;
}) {
  const url = `${siteUrl}/services/${service.slug}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteUrl}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      serviceType: service.name,
      description: service.seoDescription,
      url,
      provider: {"@id": `${siteUrl}/#organization`},
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, "\\u003c"),
        }}
      />

      <section
        className={styles.hero}
        aria-labelledby="service-heading"
      >
        <div className="iv-container">

          <nav
            className={styles.breadcrumb}
            aria-label="Breadcrumb"
          >
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li aria-current="page">{service.name}</li>
            </ol>
          </nav>

          <p className="iv-section-label">
            {service.name}
          </p>

          <h1 id="service-heading">
            {service.headline}
          </h1>

          <p className={styles.heroDescription}>
            {service.introduction}
          </p>

          <Link
            href="/contact"
            className="iv-button-primary"
          >
            Discuss Your Project
            <FiArrowRight size={18} aria-hidden="true" />
          </Link>

        </div>
      </section>

      <section
        className={styles.surface}
        aria-labelledby="offerings-heading"
      >
        <div className="iv-container">

          <p className="iv-section-label">
            Our Capabilities
          </p>

          <h2
            id="offerings-heading"
            className="iv-section-heading"
          >
            What we develop.
          </h2>

          <div className={styles.directory}>
            {service.offerings.map((item) => (
              <article
                key={item.title}
                className={styles.offering}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section
        className={styles.section}
        aria-labelledby="use-cases-heading"
      >
        <div className="iv-container">

          <p className="iv-section-label">
            Business Applications
          </p>

          <h2
            id="use-cases-heading"
            className="iv-section-heading"
          >
            Where this service adds value.
          </h2>

          <div className={styles.useCases}>
            {service.useCases.map((item) => (
              <article
                key={item.title}
                className={styles.useCase}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section
        className={styles.surface}
        aria-labelledby="technologies-heading"
      >
        <div className={`iv-container ${styles.technologyLayout}`}>

          <div>
            <p className="iv-section-label">
              Engineering
            </p>

            <h2
              id="technologies-heading"
              className="iv-section-heading"
            >
              Technologies and tools.
            </h2>

            <p className={styles.bodyText}>
              We select technologies based on the
              project requirements, existing infrastructure
              and long-term maintainability.
            </p>
          </div>

          <ul className={styles.technologies}>
            {service.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

        </div>
      </section>

      <section
        className={styles.section}
        aria-labelledby="related-heading"
      >
        <div className="iv-container">

          <h2
            id="related-heading"
            className="iv-section-heading"
          >
            Related services.
          </h2>

          <ul className={styles.related}>
            {service.relatedServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.name}
                  <FiArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </section>

      <ServiceBuyerGuide serviceSlug={service.slug} />

      <RelatedInsights serviceSlug={service.slug} />

      <section
        className={styles.cta}
        aria-labelledby="service-cta-heading"
      >
        <div className={`iv-container ${styles.ctaLayout}`}>

          <div>
            <h2 id="service-cta-heading">
              {service.ctaTitle}
            </h2>

            <p className={styles.bodyText}>
              {service.ctaDescription}
            </p>
          </div>

          <Link
            href="/contact"
            className="iv-button-primary"
          >
            Discuss Your Project
            <FiArrowRight size={18} aria-hidden="true" />
          </Link>

        </div>
      </section>
    </>
  );
}
