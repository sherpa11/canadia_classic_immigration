"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-bg-warmwhite overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="block text-sm font-semibold tracking-widest text-primary-red uppercase mb-4">
            Stories From Our Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-heading leading-tight">
            Trusted by Individuals & Families.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white p-10 md:p-16 rounded-3xl shadow-lg w-full text-center relative"
              >
                {/* Quote Mark Decoration */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl text-bg-warmwhite font-serif leading-none select-none">
                  "
                </div>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-accent-gold fill-accent-gold mx-1" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-primary-charcoal font-heading leading-relaxed mb-10 relative z-10 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].program}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-10 gap-6">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-white hover:shadow-md transition-all duration-300 text-gray-600 hover:text-primary-red"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-primary-red w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-white hover:shadow-md transition-all duration-300 text-gray-600 hover:text-primary-red"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
