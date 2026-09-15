"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ChevronLeft, ChevronRight, Star, CheckCircle2, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;
  const current = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Generate initials for avatar
  const initials = current.name
    .split("&")
    .map((part) => part.trim().charAt(0))
    .join(" & ");

  return (
    <section className="py-24 bg-bg-warmwhite overflow-hidden relative" id="testimonials">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="block text-xs sm:text-sm font-semibold tracking-widest text-primary-red uppercase mb-4">
            Real Stories, Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-4">
            Trusted by Immigrants Across Canada.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Read how we helped families, skilled professionals, and students turn their Canadian dream into reality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[380px] sm:min-h-[340px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="bg-white p-8 sm:p-12 md:p-16 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 w-full text-center relative"
              >
                {/* Decorative Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-bg-warmwhite flex items-center justify-center mx-auto mb-6 text-primary-red">
                  <Quote size={22} className="fill-primary-red/10" />
                </div>
                
                {/* 5-Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-accent-gold fill-accent-gold mx-0.5" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-lg sm:text-xl md:text-2xl text-primary-charcoal font-heading leading-relaxed mb-8 relative z-10 italic max-w-3xl mx-auto">
                  "{current.quote}"
                </p>
                
                {/* Reviewer Details */}
                <div className="flex flex-col items-center justify-center gap-2 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-bold text-lg sm:text-xl text-primary-black">
                      {current.name}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 size={12} className="text-emerald-600" /> Verified Case
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
                    <span className="font-medium text-primary-red">{current.program}</span>
                    <span>•</span>
                    <span>{current.location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-10 gap-6">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary-red hover:border-primary-red hover:text-white shadow-sm transition-all duration-300 text-gray-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-primary-red w-8" : "bg-gray-300 hover:bg-gray-400 w-2"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary-red hover:border-primary-red hover:text-white shadow-sm transition-all duration-300 text-gray-700"
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
