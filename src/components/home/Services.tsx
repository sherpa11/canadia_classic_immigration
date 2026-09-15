"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Services() {
  // Show popular or top 6 services on home
  const displayServices = siteConfig.services.slice(0, 6);

  return (
    <section className="py-24 bg-bg-offwhite" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-red/10 border border-primary-red/20 mb-4"
          >
            <Sparkles size={13} className="text-primary-red" />
            <span className="text-xs font-bold tracking-widest text-primary-red uppercase">
              Transparent Pricing & Programs
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading leading-tight mb-4"
          >
            Canadian Immigration Solutions,<br/>Designed Around Your Goals.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Explore our most requested pathways with clear, upfront pricing. Every case is handled with personalized strategic care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {displayServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <ServiceCard service={service} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* View All Services & Pricing Catalog CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-black hover:bg-primary-red text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>View All {siteConfig.services.length} Services & Complete Pricing</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
