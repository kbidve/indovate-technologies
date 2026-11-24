"use client";

import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import styles from "./Contact.module.css";

type FormStatus = "idle" | "sending" | "sent" | "error";

const projectOptions = [
  "SaaS / Product Development",
  "ERP / Business System",
  "AI Integration",
  "RAG / Knowledge Assistant",
  "LLM App / Copilot",
  "Agentic Workflow",
  "Cloud / DevOps / Integration",
  "Other",
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const submissionLock = useRef(false);

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (submissionLock.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setErrorMessage("");

    const reject = (field: string, error: string) => {
      setStatus("error");
      setErrorMessage(error);

      const control = form.elements.namedItem(field);

      if (control instanceof HTMLElement) {
        control.focus();
      }
    };

    if (name.length < 2 || name.length > 120) {
      reject(
        "name",
        "Please enter a name between 2 and 120 characters."
      );
      return;
    }

    if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      reject(
        "email",
        "Please enter a valid email address."
      );
      return;
    }

    if (company.length > 160) {
      reject(
        "company",
        "Company name must not exceed 160 characters."
      );
      return;
    }

    if (
      projectType &&
      !projectOptions.includes(projectType)
    ) {
      reject(
        "projectType",
        "Please select a valid project type."
      );
      return;
    }

    if (message.length < 10 || message.length > 5000) {
      reject(
        "message",
        "Project details must contain between 10 and 5,000 characters."
      );
      return;
    }

    const payload = {
      name,
      email,
      company,
      projectType,
      message,
    };

    submissionLock.current = true;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");

        if (response.status === 429) {
          setErrorMessage(
            "Too many requests. Please try again later."
          );
        } else if (response.status === 413) {
          setErrorMessage(
            "Your inquiry is too large. Please shorten your message."
          );
        } else if (response.status === 400) {
          setErrorMessage(
            "Please review your details and try again."
          );
        } else {
          setErrorMessage(
            "We could not confirm your inquiry. Please contact us directly if the problem continues."
          );
        }

        return;
      }

      if (result?.success !== true) {
        setStatus("error");
        setErrorMessage(
          "Submission could not be confirmed. Please contact us directly before submitting again."
        );
        return;
      }

      form.reset();
      setStatus("sent");

    } catch {
      setStatus("error");
      setErrorMessage(
        "A connection error occurred. We could not confirm your submission. Please contact us directly if needed."
      );
    } finally {
      submissionLock.current = false;
    }
  };

  return (
    <section
      id="contact-form"
      className={styles.section}
      aria-labelledby="contact-form-heading"
    >
      <div className="iv-container">

        <div className={styles.container}>

          <div className={styles.header}>

            <p className="iv-section-label">
              Project Inquiry
            </p>

            <h2
              id="contact-form-heading"
              className="iv-section-heading"
            >
              Tell us about your project.
            </h2>

            <p className={styles.introduction}>
              Share your requirements so we can
              understand your business objectives,
              technical needs and expected outcomes.
            </p>

            <p className={styles.requiredNote}>
              Fields marked with an asterisk (*) are required.
            </p>

          </div>

          <form
            className={styles.form}
            onSubmit={onSubmit}
            method="post"
            aria-labelledby="contact-form-heading"
          >

            <fieldset
              className={styles.fields}
              disabled={status === "sending"}
            >

              <div className={styles.field}>

                <label htmlFor="contact-name">
                  Full name
                  <span className={styles.required}> *</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  maxLength={120}
                  minLength={2}
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />

              </div>

              <div className={styles.field}>

                <label htmlFor="contact-email">
                  Email address
                  <span className={styles.required}> *</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  maxLength={254}
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />

              </div>

              <div className={styles.fullField}>

                <label htmlFor="contact-company">
                  Company / organization
                  <span className={styles.optional}>
                    {" "}(optional)
                  </span>
                </label>

                <input
                  id="contact-company"
                  name="company"
                  maxLength={160}
                  type="text"
                  autoComplete="organization"
                  placeholder="Your company name"
                />

              </div>

              <div className={styles.fullField}>

                <label htmlFor="contact-project-type">
                  Project type
                  <span className={styles.optional}>
                    {" "}(optional)
                  </span>
                </label>

                <select
                  id="contact-project-type"
                  name="projectType"
                  defaultValue=""
                >
                  <option value="">
                    Select your project type
                  </option>

                  {projectOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}

                </select>

              </div>

              <div className={styles.fullField}>

                <label htmlFor="contact-message">
                  Project details
                  <span className={styles.required}> *</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  maxLength={5000}
                  minLength={10}
                  rows={7}
                  required
                  aria-describedby="contact-message-help"
                  placeholder="Describe your requirements, business objectives, expected timeline and integrations."
                />

                <p
                  id="contact-message-help"
                  className={styles.help}
                >
                  Enter between 10 and 5,000 characters. Please do not include passwords,
                  API keys or confidential credentials.
                </p>

              </div>

            </fieldset>

            <div className={styles.actions}>

              <button
                type="submit"
                disabled={status === "sending"}
                className="iv-button-primary"
              >
                {status === "sending"
                  ? "Sending inquiry..."
                  : "Send Project Inquiry"}

                <FiArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </button>

            </div>

            <div
              className={styles.feedback}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {status === "sending" && (
                <p className={styles.pending}>
                  Submitting your project inquiry.
                </p>
              )}

              {status === "sent" && (
                <p className={styles.success}>
                  Your inquiry has been submitted successfully.
                  Thank you for contacting Indovate Technologies.
                </p>
              )}
            </div>

            {status === "error" && (
              <p
                className={styles.error}
                role="alert"
              >
                {errorMessage}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}
