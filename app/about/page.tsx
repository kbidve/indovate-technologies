import Section from "@/components/Section";
import Image from "next/image";

export const metadata = {
  title: "About Indovate Technologies — Full-Service IT Agency in Latur, Maharashtra",
  description: "Learn about Indovate Technologies: our mission, values, leadership, and why we are the trusted IT partner for digital transformation in India. Based in Latur, Maharashtra.",
  openGraph: {
    title: "About Indovate Technologies — Full-Service IT Agency in Latur, Maharashtra",
    description: "Learn about Indovate Technologies: our mission, values, leadership, and why we are the trusted IT partner for digital transformation in India. Based in Latur, Maharashtra.",
    type: "website",
    url: "https://www.indovatetechnologies.com/about",
    images: [
      {
        url: "/Images/indovatelogo2.png",
        width: 400,
        height: 400,
        alt: "Indovate Technologies Logo"
      }
    ]
  },
  alternates: {
    canonical: "https://www.indovatetechnologies.com/about"
  }
};

export default function AboutPage() {
  return (
    <Section
      title="About Indovate Technologies"
      intro="Indovate Technologies is a full-service IT agency based in Latur, Maharashtra, delivering digital transformation for ambitious businesses."
    >
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="card p-6 flex flex-col justify-center">
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Who We Are</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Founded in 2025, Indovate Technologies Pvt Ltd is a team of passionate engineers, designers, and strategists dedicated to building fast, reliable, and scalable digital solutions. We partner with startups, SMEs, and enterprises to deliver measurable business impact through technology.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
            <li>Custom web & mobile app development</li>
            <li>Enterprise software, ERP, and SaaS solutions</li>
            <li>API development, cloud, and DevOps</li>
            <li>UI/UX design, SEO, and digital growth</li>
            <li>AI/LLM training and consulting</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] card overflow-hidden">
          <div className="absolute inset-0 bg-transparent dark:bg-white/90 rounded-xl z-0" />
          <Image src="/Images/indovatelogo2.png" alt="Indovate Technologies Logo" fill className="object-contain p-8 relative z-10" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="card p-6">
          <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Our Values</h4>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
            <li>Integrity & transparency</li>
            <li>Client-first approach</li>
            <li>Continuous learning</li>
            <li>Innovation & quality</li>
          </ul>
        </div>
        <div className="card p-6">
          <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Leadership</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">Led by industry veterans with 10+ years of experience in software, design, and business strategy.</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">We believe in hands-on leadership and direct client collaboration for every project.</p>
        </div>
        <div className="card p-6">
          <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Why Choose Us?</h4>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
            <li>Proven track record of successful launches</li>
            <li>End-to-end project ownership</li>
            <li>Agile, transparent process</li>
            <li>Long-term support & partnership</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 card p-6 bg-white/80 dark:bg-gray-900/80">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Contact & Address</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-1">Email: <a href="mailto:sales@indovatetechnologies.com" className="text-brand-600 hover:underline">sales@indovatetechnologies.com</a></p>
        <p className="text-gray-700 dark:text-gray-300">2nd floor, Shinde heights, Khori Galli, Vasant Nagar, Sawe Wadi, Latur, Maharashtra 413531.</p>
      </div>
    </Section>
  );
}
