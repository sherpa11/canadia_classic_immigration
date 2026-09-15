"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Check, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-24 sm:pt-28 pb-8 px-4">
      {/* Background Image with refined cinematic overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black/85 via-primary-black/70 to-primary-black/90"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 text-center text-white my-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-4 sm:mb-5">
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-accent-gold">
              Your Canada Journey Starts Here
            </span>
          </div>

          {/* Editorial Heading - Scaled proportionally for 100% desktop & mobile viewport fit */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-5 leading-[1.15] text-balance tracking-tight text-white">
            {siteConfig.tagline}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 sm:gap-5">
            <Link 
              href={siteConfig.urls.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-primary-red to-primary-burgundy hover:from-[#d32f2f] hover:to-primary-red text-white rounded-full font-bold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_8px_25px_rgba(198,40,40,0.4)] hover:shadow-[0_12px_30px_rgba(198,40,40,0.5)] w-full sm:w-auto"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/services"
              className="px-7 py-3.5 bg-white/10 hover:bg-white hover:text-primary-black text-white backdrop-blur-md border border-white/25 rounded-full font-bold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>

        {/* Trust Indicators - Simple & Neat */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2.5 text-xs sm:text-sm md:text-base font-medium text-gray-300"
        >
          {["Personalized Guidance", "Transparent Process", "Dedicated Support", "Canada Immigration Specialists"].map((indicator, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check size={16} className="text-accent-gold shrink-0" />
              <span>{indicator}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 mt-4 hidden sm:flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.25em] text-white/50 uppercase">scroll to explore</span>
        <div className="w-[1.5px] h-6 bg-white/20 overflow-hidden relative rounded-full">
          <motion.div 
            className="w-full h-1/2 bg-accent-gold absolute top-0"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
