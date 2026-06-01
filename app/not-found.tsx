import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-surface text-slate-950 dark:bg-ai-ink dark:text-white">
      <div className="absolute inset-0 -z-10 bg-hero-radial opacity-15 dark:opacity-100" />
      <div className="absolute inset-0 -z-10 grid-overlay-light opacity-40 dark:grid-overlay-dark dark:opacity-20" />

      <section className="flex min-h-screen items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="glass-card max-w-2xl p-8 text-center sm:p-12">
          <span className="eyebrow text-slate-700 dark:text-cyan-200">
            404
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            This route is outside the system map.
          </h1>
          <p className="mt-5 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            The page you are looking for does not exist or may have moved during
            the software + AI website rebuild.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-slate-950 ring-1 ring-slate-200 dark:text-white dark:ring-0"
            >
              Contact Indovate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
