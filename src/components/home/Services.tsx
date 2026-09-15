"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  const displayServices = siteConfig.services.slice(0, 6); // Show top 6 on home

  return (
    <section className="py-24 bg-bg-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-sm font-semibold tracking-widest text-primary-red uppercase mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading leading-tight"
          >
            Canadian Immigration Solutions,<br/>Designed Around Your Goals.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <ServiceCard service={service} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
