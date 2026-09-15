"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function CanadaJourney() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490623970972-ae8bb3e64f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary-black/70"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-8 leading-tight">
            Canada Is More Than a Destination.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 font-light leading-relaxed">
            Whether your goal is to study, work, reunite with family or build a permanent future, we're here to help you navigate the journey.
          </p>
          <Link 
            href={siteConfig.urls.consultation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-primary-black hover:bg-accent-gold hover:text-white rounded font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
