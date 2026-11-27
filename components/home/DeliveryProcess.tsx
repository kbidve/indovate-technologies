import styles from "./DeliveryProcess.module.css";

const steps = [
  {
    title: "Discover",
    description:
      "We start by understanding your business, project requirements, existing systems and the problems you want to solve.",
    deliverable: "Project requirements and scope",
  },
  {
    title: "Plan & design",
    description:
      "We define the technical approach, application architecture, priorities and delivery roadmap based on your requirements.",
    deliverable: "Architecture and delivery plan",
  },
  {
    title: "Build & validate",
    description:
      "We develop the solution in stages, review progress collaboratively and validate functionality through testing and feedback.",
    deliverable: "Tested, working software",
  },
  {
    title: "Launch & support",
    description:
      "We prepare the application for deployment, coordinate the handover and define ongoing support and future improvements.",
    deliverable: "Production deployment and handover",
  },
];

export default function DeliveryProcess() {
  return (
    <section
      id="process"
      className={styles.section}
      aria-labelledby="delivery-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>
          <p className="iv-section-label">
            How We Work
          </p>

          <h2
            id="delivery-heading"
            className="iv-section-heading"
          >
            From first conversation to delivery.
          </h2>

          <p className="iv-section-description">
            A collaborative software development process,
            with clear priorities, regular communication
            and a focus on building the right solution
            for your business.
          </p>
        </div>

        <ol className={styles.timeline}>

          {steps.map((step, index) => (
            <li
              key={step.title}
              className={styles.step}
            >
              <span
                className={styles.number}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className={styles.marker}
                aria-hidden="true"
              />

              <div className={styles.content}>

                <h3>{step.title}</h3>

                <p className={styles.description}>
                  {step.description}
                </p>

                <div className={styles.deliverable}>
                  <span>Key deliverable</span>
                  <p>{step.deliverable}</p>
                </div>

              </div>
            </li>
          ))}

        </ol>

      </div>
    </section>
  );
}
