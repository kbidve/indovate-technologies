import Link from "next/link";
import styles from "./ServicePage.module.css";

type BuyerGuide = {
  process: {
    title: string;
    description: string;
  }[];
  questions: {
    question: string;
    answer: string;
  }[];
};

const guides: Record<string, BuyerGuide> = {
  "custom-software-development": {
    process: [
      {
        title: "Discovery & requirements",
        description:
          "Understand your business processes, existing applications, users and technical requirements to define the project scope.",
      },
      {
        title: "Architecture & development",
        description:
          "Plan the application architecture, integrations and development milestones around your business requirements.",
      },
      {
        title: "Testing & production delivery",
        description:
          "Validate application functionality, integrations and deployment requirements before planning the production release.",
      },
    ],
    questions: [
      {
        question: "How much does custom software development cost?",
        answer:
          "Development costs depend on application complexity, required features, integrations, security requirements and delivery scope. A project estimate can be prepared after reviewing your requirements.",
      },
      {
        question: "Can you modernize our existing software?",
        answer:
          "Yes. We can review existing applications, identify modernization opportunities and plan improvements to frontend interfaces, backend architecture and system integrations.",
      },
      {
        question: "Can you work with international businesses?",
        answer:
          "We work remotely with businesses worldwide. Communication schedules, project milestones and reporting arrangements can be agreed during project planning.",
      },
    ],
  },

  "ai-development": {
    process: [
      {
        title: "AI opportunity assessment",
        description:
          "Review your business objectives, available data and existing applications to identify suitable AI use cases.",
      },
      {
        title: "Architecture & AI development",
        description:
          "Select an appropriate model, retrieval architecture, integration approach and evaluation strategy for your application.",
      },
      {
        title: "Evaluation & integration",
        description:
          "Evaluate response quality, retrieval relevance and workflow reliability before integrating AI capabilities into production applications.",
      },
    ],
    questions: [
      {
        question: "How much does AI development cost?",
        answer:
          "AI development costs depend on data complexity, model selection, retrieval requirements, integrations and infrastructure. Model usage and hosting costs should also be considered.",
      },
      {
        question: "Can you integrate generative AI into existing applications?",
        answer:
          "Yes. AI capabilities can be integrated into existing applications through APIs, retrieval systems and controlled workflows, depending on the architecture and business requirements.",
      },
      {
        question: "Can you develop AI using private company documents?",
        answer:
          "We develop RAG systems that retrieve relevant information from enterprise knowledge sources. Data permissions, access controls and model-provider requirements are evaluated during architecture planning.",
      },
    ],
  },

  "web-saas-development": {
    process: [
      {
        title: "Product discovery",
        description:
          "Define target users, essential product features, subscription requirements and the initial development scope.",
      },
      {
        title: "Product architecture & development",
        description:
          "Develop frontend interfaces, backend services, database architecture and relevant authentication or billing integrations.",
      },
      {
        title: "Launch & product improvement",
        description:
          "Validate core functionality, prepare the deployment environment and plan future product improvements based on user feedback.",
      },
    ],
    questions: [
      {
        question: "How much does SaaS development cost?",
        answer:
          "SaaS development costs depend on product features, tenant architecture, subscription billing, integrations, user roles and infrastructure requirements.",
      },
      {
        question: "Can you develop an MVP for a startup?",
        answer:
          "Yes. We can help define essential product features and develop an MVP designed to validate your business idea and support future development.",
      },
      {
        question: "Can you develop multi-tenant SaaS applications?",
        answer:
          "Yes. Our SaaS development capabilities include tenant-aware architecture, organization-specific configurations, authentication and role-based access controls.",
      },
    ],
  },

  "enterprise-solutions": {
    process: [
      {
        title: "Business process assessment",
        description:
          "Review departmental workflows, existing software, reporting requirements and required ERP or CRM modules.",
      },
      {
        title: "Enterprise system development",
        description:
          "Develop business-specific modules, centralized data structures, access controls and required application integrations.",
      },
      {
        title: "Validation & implementation",
        description:
          "Validate operational workflows, reporting accuracy and integration requirements before planning implementation and rollout.",
      },
    ],
    questions: [
      {
        question: "How much does custom ERP development cost?",
        answer:
          "ERP development costs depend on the number of modules, business workflows, user roles, reporting requirements, data migration and third-party integrations.",
      },
      {
        question: "Can ERP software be customized for our business?",
        answer:
          "Yes. Custom ERP development allows modules, workflows, reporting and permissions to be designed around your organization's operational requirements.",
      },
      {
        question: "Can you integrate ERP with our existing applications?",
        answer:
          "We can evaluate integration with existing CRM systems, databases, business applications and third-party APIs based on available interfaces and data requirements.",
      },
    ],
  },

  "business-automation": {
    process: [
      {
        title: "Workflow discovery",
        description:
          "Identify repetitive tasks, manual approvals, document processing activities and disconnected business applications.",
      },
      {
        title: "Automation design & integration",
        description:
          "Define suitable rule-based or AI-powered workflows, application integrations and human review checkpoints.",
      },
      {
        title: "Monitoring & validation",
        description:
          "Evaluate workflow reliability, exception handling and operational visibility before introducing automation into business processes.",
      },
    ],
    questions: [
      {
        question: "How much do AI automation services cost?",
        answer:
          "Automation costs depend on workflow complexity, document volumes, required integrations, AI model usage and monitoring requirements.",
      },
      {
        question: "Which business processes can be automated?",
        answer:
          "Potential use cases include document processing, internal approvals, recurring reports, data synchronization and information exchange between business applications.",
      },
      {
        question: "Can automation include human approval?",
        answer:
          "Yes. Workflows can incorporate review checkpoints, approval rules and escalation mechanisms where business processes require human oversight.",
      },
    ],
  },

  "cloud-devops": {
    process: [
      {
        title: "Infrastructure assessment",
        description:
          "Review application architecture, hosting environments, deployment processes and operational requirements.",
      },
      {
        title: "Cloud engineering & automation",
        description:
          "Configure suitable infrastructure, containerization, release pipelines and environment settings based on application requirements.",
      },
      {
        title: "Production readiness",
        description:
          "Validate deployment workflows, monitoring, access controls and operational requirements before planning production delivery.",
      },
    ],
    questions: [
      {
        question: "How much do cloud and DevOps services cost?",
        answer:
          "Costs depend on infrastructure complexity, application workloads, deployment requirements and ongoing operational needs. Cloud-provider charges should be estimated separately.",
      },
      {
        question: "Can you improve our existing deployment pipeline?",
        answer:
          "Yes. We can review existing CI/CD workflows and identify opportunities to automate builds, testing and deployment processes.",
      },
      {
        question: "Do you work with AWS and Microsoft Azure?",
        answer:
          "Our cloud engineering capabilities include AWS and Microsoft Azure deployment, Docker, Kubernetes and CI/CD automation based on project requirements.",
      },
    ],
  },
};

export default function ServiceBuyerGuide({
  serviceSlug,
}: {
  serviceSlug: string;
}) {
  const guide = guides[serviceSlug];

  if (!guide) return null;

  return (
    <>
      <section
        id="project-planning"
        className={styles.surface}
        aria-labelledby="project-planning-heading"
      >
        <div className="iv-container">
          <p className="iv-section-label">
            Project Delivery
          </p>

          <h2
            id="project-planning-heading"
            className="iv-section-heading"
          >
            How we approach your project.
          </h2>

          <div className={styles.directory}>
            {guide.process.map((step, index) => (
              <article
                key={step.title}
                className={styles.offering}
              >
                <h3>
                  {index + 1}. {step.title}
                </h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <p className={styles.bodyText}>
            Project scope, communication schedules, milestones
            and delivery requirements are agreed with each client.
          </p>

          <ul className={styles.related}>
            <li>
              <Link href="/portfolio">
                Explore our software and AI engineering portfolio
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="service-faq"
        className={styles.section}
        aria-labelledby="service-faq-heading"
      >
        <div className="iv-container">
          <p className="iv-section-label">
            Project Questions
          </p>

          <h2
            id="service-faq-heading"
            className="iv-section-heading"
          >
            Frequently asked questions.
          </h2>

          <div className={styles.directory}>
            {guide.questions.map((item) => (
              <article
                key={item.question}
                className={styles.offering}
              >
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
