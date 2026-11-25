export type NavigationLink = {
  label: string;
  href: string;
  description: string;
};

export type NavigationGroup = {
  title: string;
  links: NavigationLink[];
};

export type NavigationMenu = {
  id: string;
  label: string;
  groups: NavigationGroup[];
  overview: {
    label: string;
    href: string;
  };
};

export const navigationMenus: NavigationMenu[] = [
  {
    id: "services",
    label: "Services",

    groups: [
      {
        title: "Software Engineering",
        links: [
          {
            label: "Custom Software Development",
            href: "/services/custom-software-development",
            description:
              "Business applications, product engineering and APIs.",
          },
          {
            label: "Web & SaaS Development",
            href: "/services/web-saas-development",
            description:
              "Digital products, MVPs and multi-tenant platforms.",
          },
          {
            label: "ERP & Enterprise Solutions",
            href: "/services/enterprise-solutions",
            description:
              "Integrated enterprise management systems.",
          },
        ],
      },
      {
        title: "AI & Infrastructure",
        links: [
          {
            label: "Generative AI Development",
            href: "/services/ai-development",
            description:
              "Enterprise RAG, LLM applications and AI agents.",
          },
          {
            label: "Business Process Automation",
            href: "/services/business-automation",
            description:
              "Intelligent workflows and business integrations.",
          },
          {
            label: "Cloud & DevOps",
            href: "/services/cloud-devops",
            description:
              "Cloud infrastructure, CI/CD and reliable deployment.",
          },
        ],
      },
    ],

    overview: {
      label: "Explore All Services",
      href: "/services",
    },
  },

  {
    id: "solutions",
    label: "Solutions",

    groups: [
      {
        title: "Build & Modernize",
        links: [
          {
            label: "Launch a Digital Product",
            href: "/services/web-saas-development",
            description:
              "Turn your product idea into a scalable application.",
          },
          {
            label: "Modernize Existing Software",
            href: "/services/custom-software-development",
            description:
              "Upgrade legacy applications and integrations.",
          },
          {
            label: "Connect Enterprise Operations",
            href: "/services/enterprise-solutions",
            description:
              "Unify business processes with custom ERP systems.",
          },
        ],
      },
      {
        title: "Transform & Scale",
        links: [
          {
            label: "Adopt Artificial Intelligence",
            href: "/services/ai-development",
            description:
              "Connect enterprise knowledge with AI applications.",
          },
          {
            label: "Automate Business Operations",
            href: "/services/business-automation",
            description:
              "Reduce repetitive work through intelligent workflows.",
          },
          {
            label: "Scale Your Infrastructure",
            href: "/services/cloud-devops",
            description:
              "Build reliable and maintainable cloud environments.",
          },
        ],
      },
    ],

    overview: {
      label: "Discuss Your Business Requirements",
      href: "/contact",
    },
  },

  {
    id: "work",
    label: "Our Work",

    groups: [
      {
        title: "Featured Projects",
        links: [
          {
            label: "Belsio ERP Platform",
            href: "/portfolio#belsio-erp",
            description:
              "Enterprise software for connected business operations.",
          },
          {
            label: "Enterprise AI Companion",
            href: "/portfolio#enterprise-ai-companion",
            description:
              "Enterprise knowledge retrieval and AI-powered workflows.",
          },
        ],
      },
      {
        title: "Our Engineering Approach",
        links: [
          {
            label: "Technical Expertise",
            href: "/#engineering",
            description:
              "Explore our software and AI engineering capabilities.",
          },
          {
            label: "Delivery Process",
            href: "/#process",
            description:
              "Understand how we plan, build and deliver software.",
          },
        ],
      },
    ],

    overview: {
      label: "View Our Portfolio",
      href: "/portfolio",
    },
  },

  {
    id: "resources",
    label: "Resources",

    groups: [
      {
        title: "Software & Enterprise",
        links: [
          {
            label: "Custom vs. Off-the-Shelf Software",
            href: "/blog/custom-software-vs-off-the-shelf-software",
            description:
              "Choose the right software approach for your business.",
          },
          {
            label: "Building a SaaS Product",
            href: "/blog/how-to-plan-and-build-a-saas-product",
            description:
              "Plan and develop scalable digital products.",
          },
          {
            label: "Custom ERP Systems",
            href: "/blog/when-does-your-business-need-a-custom-erp-system",
            description:
              "Understand when custom ERP development makes sense.",
          },
          {
            label: "Production Readiness",
            href: "/blog/how-to-prepare-a-software-application-for-production",
            description:
              "Prepare software for reliable production deployment.",
          },
        ],
      },
      {
        title: "Artificial Intelligence",
        links: [
          {
            label: "Enterprise RAG",
            href: "/blog/rag-for-enterprise-knowledge-management",
            description:
              "Retrieval-augmented generation for enterprise knowledge.",
          },
          {
            label: "AI Integration",
            href: "/blog/how-to-integrate-ai-into-existing-business-applications",
            description:
              "Integrate AI into existing business applications.",
          },
          {
            label: "Business Automation with AI",
            href: "/blog/how-to-automate-business-processes-with-ai",
            description:
              "Explore practical AI-powered business workflows.",
          },
        ],
      },
    ],

    overview: {
      label: "Explore All Engineering Insights",
      href: "/blog",
    },
  },

  {
    id: "company",
    label: "Company",

    groups: [
      {
        title: "About Indovate",
        links: [
          {
            label: "About Us",
            href: "/about",
            description:
              "Our company, capabilities and engineering philosophy.",
          },
          {
            label: "Engineering Principles",
            href: "/about#engineering-principles",
            description:
              "Learn how we approach software engineering.",
          },
        ],
      },
      {
        title: "Work With Us",
        links: [
          {
            label: "Global Collaboration",
            href: "/about#global-collaboration",
            description:
              "How we collaborate with businesses worldwide.",
          },
          {
            label: "Contact Us",
            href: "/contact",
            description:
              "Discuss your project with our engineering team.",
          },
        ],
      },
    ],

    overview: {
      label: "Learn About Indovate",
      href: "/about",
    },
  },
];
