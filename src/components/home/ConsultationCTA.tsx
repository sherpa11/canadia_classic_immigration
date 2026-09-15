"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="py-24 bg-primary-burgundy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-red opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto text-white"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-6">
            Ready to Begin Your Canadian Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 font-light">
            Take the first step with a consultation designed around your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              href={siteConfig.urls.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-black hover:bg-bg-warmwhite rounded font-semibold text-lg transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              Book a Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-transparent border border-white/30 hover:border-white hover:bg-white/10 text-white rounded font-semibold text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
