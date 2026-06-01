"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const projectType = formData.get("projectType") as string;
    const message = formData.get("message") as string;

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: projectType ? `Project Type: ${projectType}\n\n${message}` : message,
    };

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
        setErrorMessage(result?.error || "Something went wrong. Try again.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-glass-light dark:border-white/10 dark:bg-white/[0.04] dark:shadow-glass-dark sm:p-6 lg:p-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-300/10 via-transparent to-brand-500/10" />
      <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-950/50"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400">
            Project Intake
          </span>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Share your software or AI project brief.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Use this form for SaaS platforms, ERP systems, web applications, AI
            integrations, RAG systems, LLM copilots, agentic workflows, cloud
            deployment, or long-term engineering support.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
            {[
              "Architecture-first discovery",
              "Software + AI delivery planning",
              "Production-focused implementation",
              "Cloud, DevOps, and support readiness",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="grid grid-cols-1 gap-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-950/60 sm:p-6 md:grid-cols-2"
        >
          <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Name
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Email
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 md:col-span-2">
            Company
            <input
              name="company"
              placeholder="Company / startup / organization"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 md:col-span-2">
            Project type
            <select
              name="projectType"
              defaultValue=""
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
            >
              <option value="" disabled>
                Select closest project type
              </option>
              {projectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 md:col-span-2">
            Project details
            <textarea
              name="message"
              required
              placeholder="Tell us what you want to build, existing systems, AI requirements, timeline, and any integrations needed."
              rows={6}
              className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
            />
          </label>

          <div className="flex flex-col gap-3 md:col-span-2 sm:flex-row sm:items-center">
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ y: status === "sending" ? 0 : -2 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Project Brief"}
            </motion.button>

            <AnimatePresence mode="wait">
              {status === "error" ? (
                <motion.span
                  key="error"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-sm font-medium text-red-600 dark:text-red-400"
                >
                  {errorMessage || "Something went wrong. Try again."}
                </motion.span>
              ) : null}

              {status === "sent" ? (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  Message sent successfully. We will review your brief.
                </motion.span>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
