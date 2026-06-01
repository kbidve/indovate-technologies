"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Apisec",
    logo: "/Images/Apisec_Logo.svg",
    focus: "API security and product engineering",
  },
  {
    name: "Artificio",
    logo: "/Images/artificio_logo.svg",
    focus: "Digital product and web platform delivery",
  },
  {
    name: "Belsio",
    logo: "/Images/Belsio_logo.svg",
    focus: "ERP, property, finance, and business systems",
  },
  {
    name: "Fluence",
    logo: "/Images/fluence_logo.svg",
    focus: "Software workflows and integration support",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TrustedClients() {
  const marqueeClients = [...clients, ...clients];

  return (
    <section
      id="trusted-clients"
      className="section-compact relative overflow-hidden bg-surface-muted/90 dark:bg-ai-ink/95"
    >
      <div
        className="absolute inset-0 grid-overlay-light opacity-45 dark:grid-overlay-dark dark:opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 h-52 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-300/8"
        aria-hidden="true"
      />

      <motion.div
        className="container-wide relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={reveal}
      >
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/75 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] sm:p-6 lg:p-7">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <span className="eyebrow border-slate-300/60 bg-white/70 text-slate-700 shadow-sm dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
                Trusted Work
              </span>

              <h2 className="mt-4 max-w-xl text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white md:text-4xl">
                Clients and products we have supported.
              </h2>

              <p className="mt-4 max-w-xl text-pretty text-slate-600 dark:text-slate-300">
                From ERP platforms to SaaS products and integration-heavy systems,
                we work with teams that need dependable software delivery and
                practical AI capability.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.035]">
              <div className="mask-fade-x overflow-hidden">
                <motion.div
                  className="flex w-max gap-4 will-change-transform"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {marqueeClients.map((client, index) => (
                    <article
                      key={`${client.name}-${index}`}
                      aria-hidden={index >= clients.length}
                      className="flex min-w-[250px] items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06] sm:min-w-[290px]"
                    >
                      <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-3 ring-1 ring-slate-200 dark:bg-white/95">
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          width={118}
                          height={48}
                          className="max-h-10 w-auto object-contain"
                        />
                      </div>

                      <div>
                        <h3 className="text-base font-black text-slate-950 dark:text-white">
                          {client.name}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {client.focus}
                        </p>
                      </div>
                    </article>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
