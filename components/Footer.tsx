"use client";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer(){
  const socials = [
    { Icon: FaFacebook, href: 'https://www.facebook.com/people/Indovate-Technologies/61580359829668/' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/indovate_tech/' },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/company/indovate-technologies' },
  ];
  return (
    <motion.div
      className="mt-20 border-t bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <footer>
        {/* Main row: copyright and socials */}
        <div className="container-tight py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Indovate Technologies Pvt Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                className="group p-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-primary-50 shadow-sm transition-all duration-200 dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:bg-primary-950"
                aria-label="social link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.12,
                  boxShadow: '0 4px 16px #64748b22'
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <Icon
                  size={20}
                  className="transition-colors duration-200 text-gray-700 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                />
              </motion.a>
            ))}
          </div>
        </div>
        {/* Second row: Google Maps badge/button, right-aligned on desktop, centered on mobile */}
        <div className="container-tight pb-6 flex flex-col md:flex-row items-center md:justify-end gap-4">
          <a
            href="https://maps.app.goo.gl/r4M9529v6sycC2ZS6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 shadow hover:bg-gray-50 transition ml-2
                       text-gray-700 dark:bg-gray-900 dark:border-gray-600 dark:text-neutral-200 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-[#4285F4] dark:text-[#8ab4f8]"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            Find us on Google Maps
          </a>
        </div>
      </footer>
    </motion.div>
  );
}