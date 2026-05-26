'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useTheme } from '@/hooks/useTheme';
import { useAnimatedBackground } from '@/hooks/useAnimatedBackground';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBuilding,
  FaCogs,
  FaPlug,
  FaSyncAlt,
  FaBug,
  FaPaintBrush,
  FaShoppingCart,
  FaCloud,
  FaChartLine,
  FaTools,
  FaLifeRing,
  FaLightbulb
} from 'react-icons/fa';

const FEATURES = [
  {
    icon: FaLaptopCode,
    title: 'Custom Website Development',
    desc: 'Tailored websites built for your unique business needs.',
    details:
      'We create high-performance, scalable, and visually stunning websites tailored to your brand and business goals. Our team leverages the latest technologies and best practices to ensure your site is fast, secure, and optimized for conversions.',
    stacks: ['React.js', 'Next.js', 'Angular', 'Node.js', 'Django', 'Flask']
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    desc: 'iOS & Android, native and cross-platform mobile solutions.',
    details:
      'From concept to launch, we build robust mobile apps for iOS and Android. Our expertise covers both native and cross-platform solutions, ensuring seamless user experiences and high performance on all devices.',
    stacks: ['Flutter', 'Kotlin']
  },
  {
    icon: FaBuilding,
    title: 'Enterprise Software Development',
    desc: 'Robust, scalable software for enterprise operations.',
    details:
      'We deliver enterprise-grade software solutions that streamline operations, boost productivity, and scale with your business. Our custom platforms are secure, reliable, and tailored to your unique requirements.',
    stacks: ['Java', 'Spring Boot', 'Node.js', 'Python']
  },
  {
    icon: FaCogs,
    title: 'Full-Stack Web App Development',
    desc: 'End-to-end web applications using modern stacks.',
    details:
      'Our full-stack development team builds powerful web applications using the latest frameworks and technologies. We handle everything from frontend UI/UX to backend APIs and databases.',
    stacks: ['MERN Stack', 'MEAN Stack', 'Django + React', 'Flask + Angular']
  },
  {
    icon: FaPlug,
    title: 'API Development & Integration',
    desc: 'REST & GraphQL APIs, seamless third-party integrations.',
    details:
      'We design and implement robust REST and GraphQL APIs, and integrate your systems with third-party services for enhanced functionality and automation.',
    stacks: ['Node.js', 'Express', 'GraphQL', 'Django REST', 'Flask APIs']
  },
  {
    icon: FaSyncAlt,
    title: 'App Modernization & Legacy Upgrades',
    desc: 'Upgrade and modernize legacy systems for today.',
    details:
      'We help you modernize outdated applications, migrate to new platforms, and upgrade legacy systems for improved performance, security, and maintainability.',
    stacks: ['Java Spring', 'Python', 'Cloud Migration']
  },
  {
    icon: FaBug,
    title: 'Bug Fixing & Optimization',
    desc: 'Debugging, performance tuning, and code fixes.',
    details:
      'Our experts quickly identify and resolve bugs, optimize code, and enhance the performance and stability of your applications.',
    stacks: ['JavaScript', 'Python', 'Java', 'SQL Optimization']
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Development',
    desc: 'Web and mobile stores for modern commerce.',
    details:
      'We build secure, scalable, and feature-rich e-commerce platforms for web and mobile, tailored to your business model and customer needs.',
    stacks: ['Next.js Commerce', 'Custom Node.js']
  },
  {
    icon: FaChartLine,
    title: 'SaaS Product Development',
    desc: 'Cloud-based SaaS solutions from idea to launch.',
    details:
      'From MVP to full-scale SaaS products, we handle the entire development lifecycle, ensuring your solution is robust, scalable, and ready for growth.',
    stacks: ['React.js', 'Next.js', 'Node.js', 'Django', 'AWS']
  },
  {
    icon: FaCloud,
    title: 'Cloud-Based App Development',
    desc: 'Build and deploy scalable cloud applications.',
    details:
      'We architect, build, and deploy cloud-native applications that leverage the power and flexibility of modern cloud platforms.',
    stacks: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes']
  },
  {
    icon: FaTools,
    title: 'Custom ERP & Business Solutions',
    desc: 'ERP, CRM, and business automation tailored for you.',
    details:
      'We develop custom ERP, CRM, and business automation solutions that streamline your workflows and drive efficiency.',
    stacks: ['Odoo', 'Custom Node.js + React']
  },
  {
    icon: FaLifeRing,
    title: 'Maintenance & Support',
    desc: 'Ongoing technical support and maintenance services.',
    details:
      'Our team provides reliable, ongoing support and maintenance to keep your systems running smoothly and securely.',
    stacks: ['24/7 Monitoring', 'Security Patching', 'Performance Audits']
  },
  {
    icon: FaLightbulb,
    title: 'Tech Consulting & Outsourcing',
    desc: 'Expert advice and project outsourcing for IT success.',
    details:
      'We offer expert IT consulting and project outsourcing to help you make informed decisions and achieve your technology goals.',
    stacks: ['Agile Consulting', 'Team Augmentation', 'Architecture Review']
  }
];

const modalVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.25 } }
};

type ServicesProps = { featuredOnly?: boolean };

export default function Services({ featuredOnly = false }: ServicesProps) {
  const displayFeatures = featuredOnly ? FEATURES.slice(0, 5) : FEATURES;
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Use shared hooks for theme and animated background
  const isDark = useTheme();
  const { sectionRef, bgRef, cursorHolderRef } = useAnimatedBackground(isDark, {
    trailCount: 12,
    trailHeight: 'h-28 md:h-32',
    quickToSettings: {
      duration: 0.24,
      ease: 'power3.out'
    },
    repulsionSettings: {
      radius: { dark: 200, light: 170 },
      maxRepel: { dark: 120, light: 100 },
      power: 2
    }
  });

  // ====== cards and modal entrance ======
  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }
  }, [displayFeatures.length]);

  useEffect(() => {
    if (modalOpen) {
      gsap.to('#service-modal-overlay', {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to('#service-modal-overlay', {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      });
    }
  }, [modalOpen]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-slate-50 to-slate-100
        dark:from-gray-900 dark:via-black dark:to-[#0f1115]
        rounded-3xl p-1
      "
    >
      {/* Light-mode subtle vignette */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          [background:radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0.05),transparent_70%)]
          dark:[background:none]
        "
      />

      {/* Animated background trails */}
      <div ref={bgRef} className="absolute inset-0 z-[1] pointer-events-none" />

      {/* Foreground content wrapper */}
      <div className="relative z-[3] p-4 sm:p-6 lg:p-8">
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              className="
                card p-6 h-full flex flex-col items-start cursor-pointer
                bg-white/70 dark:bg-gray-900/70 backdrop-blur
                ring-1 ring-black/5 dark:ring-white/5 rounded-2xl
              "
              whileHover={{ scale: 1.05, boxShadow: '0 4px 24px #f38c1740' }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              onClick={() => {
                setSelected(i);
                setModalOpen(true);
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelected(i);
                  setModalOpen(true);
                }
              }}
              aria-label={`More about ${f.title}`}
            >
              <f.icon className="text-3xl text-brand-600" />
              <h3 className="mt-4 font-semibold text-lg text-gray-900 dark:text-gray-100">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* See all services (if featuredOnly) */}
        {featuredOnly && (
          <div className="mt-8 text-center">
            <a
              href="/services"
              className="inline-block px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400"
            >
              See All Services
            </a>
          </div>
        )}
      </div>

      {/* Cursor ring mount (kept separate so it stays above content but doesn’t block clicks) */}
      <div ref={cursorHolderRef} className="absolute inset-0 z-[4] pointer-events-none" />

      {/* Modal Pop-up */}
      <AnimatePresence>
        {modalOpen && selected !== null && (
          <>
            {/* Overlay */}
            <motion.div
              id="service-modal-overlay"
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              aria-label="Close service details"
            />
            {/* Modal */}
            <motion.div
              className="fixed z-[70] inset-0 flex items-center justify-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <div className="relative w-[95vw] max-w-xs sm:max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-600 text-2xl focus:outline-none"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                  tabIndex={0}
                >
                  &times;
                </button>
                <div className="flex flex-col items-center">
                  {selected !== null && (
                    <>
                      {(() => {
                        const Icon = displayFeatures[selected].icon;
                        return <Icon className="text-4xl text-brand-600 mb-4" />;
                      })()}
                      <h3 className="font-bold text-2xl text-center text-gray-900 dark:text-gray-100 mb-2">
                        {displayFeatures[selected].title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                        {displayFeatures[selected].desc}
                      </p>
                      <div className="text-gray-600 dark:text-gray-400 text-sm text-center max-w-prose mb-2">
                        {displayFeatures[selected].details}
                      </div>

                      {displayFeatures[selected].stacks && (
                        <div className="mt-4 w-full">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-center mb-2">
                            We Specialize In:
                          </h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {displayFeatures[selected].stacks.map((stack) => (
                              <span
                                key={stack}
                                className="px-3 py-1 bg-brand-50 dark:bg-gray-800 text-brand-700 dark:text-brand-300 rounded-full text-xs font-medium shadow-sm"
                              >
                                {stack}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
