"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ClientLogos from '@/components/ClientLogos';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';


export default function HomePage() {
  return (
    <>
      <Hero />
      <motion.section className="section container-tight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
        <Services featuredOnly />
      </motion.section>
      <motion.section className="section container-tight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}>
        <ClientLogos />
      </motion.section>
      <motion.section className="section container-tight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}>
        <Process />
      </motion.section>
      <motion.section className="section container-tight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}>
        <Testimonials />
      </motion.section>
      <motion.section id="contact" className="section container-tight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}>
        <Contact />
      </motion.section>
    </>
  );
}
