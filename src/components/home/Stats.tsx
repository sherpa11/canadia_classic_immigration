"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="bg-primary-charcoal py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-700">
          {siteConfig.stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-heading text-accent-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
