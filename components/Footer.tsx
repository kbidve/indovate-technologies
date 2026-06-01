"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowRight,
  FaBrain,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const capabilityLinks = [
  { href: "/#solutions", label: "SaaS & ERP Development" },
  { href: "/#ai-capabilities", label: "RAG & LLM Systems" },
  { href: "/ai-project-advisor", label: "AI Project Advisor" },
  { href: "/#engineering", label: "Production Engineering" },
  { href: "/#process", label: "Delivery Process" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Indovate-Technologies/61580359829668/",
    Icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/indovate_tech/",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/indovate-technologies",
    Icon: FaLinkedin,
  },
];

const stackTags = [
  "Next.js",
  "Django",
  "FastAPI",
  "React",
  "RAG",
  "LangGraph",
  "Cloud",
  "DevOps",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-900 dark:border-white/10 dark:bg-ai-ink dark:text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.12),transparent_34rem),radial-gradient(circle_at_85%_20%,rgba(243,140,23,0.12),transparent_30rem)]"
      />
      <div aria-hidden className="absolute inset-0 grid-overlay-light opacity-50 dark:grid-overlay-dark dark:opacity-30" />

      <div className="container-wide relative z-10 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl ">
            {/* <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" /> */}
            <Image
              src="/Images/indovatelogo.png"
              alt="Indovate Technologies Logo"
              width={400}
              height={400}
              className="relative z-15 h-10 w-15 object-contain"
            />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-base font-bold leading-tight text-slate-950 dark:text-white sm:text-lg">
              Indovate Technologies
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-cyan-100/70 sm:block">
              Software + Agentic FLow
            </span>
          </span>
        </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              We build production-grade software products, SaaS platforms, ERP
              systems, AI integrations, RAG applications, copilots, and agentic
              workflows for startups and growing businesses.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stackTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Capabilities" links={capabilityLinks} />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-cyan-100/70">
              Start a conversation
            </h3>

            <div className="mt-5 grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <a
                href="mailto:kailas.bidve@indovatetechnologies.com"
                className="group flex items-start gap-3 transition hover:text-slate-950 dark:hover:text-white"
              >
                <FaEnvelope className="mt-1 shrink-0 text-brand-500" />
                <span className="break-all">kailas.bidve@indovatetechnologies.com</span>
              </a>

              <a
                href="https://maps.app.goo.gl/r4M9529v6sycC2ZS6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 transition hover:text-slate-950 dark:hover:text-white"
              >
                <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" />
                <span>
                  2nd floor, Shinde Heights, Khori Galli, Vasant Nagar, Latur,
                  Maharashtra 413531.
                </span>
              </a>
            </div>

            <Link href="/contact" className="btn-primary group mt-6 w-full">
              Send Project Brief
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-brand-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Indovate Technologies Pvt Ltd. All rights reserved.</p>
          <p>Built for software products, enterprise systems, and production AI.</p>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    label: string;
  }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: 0.06, ease: "easeOut" }}
    >
      <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-cyan-100/70">
        {title}
      </h3>
      <ul className="mt-5 grid gap-3">
        {links.map((link) => (
          <li key={`${title}-${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
