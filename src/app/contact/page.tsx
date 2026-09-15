"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="pt-40 sm:pt-48 pb-24 bg-bg-offwhite min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header Title Section with ample clearance */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-red/10 border border-primary-red/20 mb-4 text-primary-red text-xs font-semibold uppercase tracking-widest">
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 text-primary-black">
            Let's Talk About Your Future.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team of experts to discuss your Canadian immigration goals.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto items-start">
          
          {/* Contact Details Card (5 cols on desktop) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="font-heading text-2xl font-bold mb-8 border-b border-gray-100 pb-4 text-primary-black">
              Contact Information
            </h2>
            
            <div className="space-y-7">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-2xl bg-bg-warmwhite flex items-center justify-center text-primary-red shrink-0 border border-gray-100 shadow-sm">
                  <Phone size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-primary-black text-sm mb-1">Phone</h3>
                  <a 
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} 
                    className="text-gray-600 hover:text-primary-red transition-colors text-sm sm:text-base font-medium block"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              
              {/* Email - Handled with break-all so it never overflows */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-2xl bg-bg-warmwhite flex items-center justify-center text-primary-red shrink-0 border border-gray-100 shadow-sm">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-primary-black text-sm mb-1">Email</h3>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`} 
                    className="text-gray-600 hover:text-primary-red transition-colors text-sm sm:text-base font-medium break-all block"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-2xl bg-bg-warmwhite flex items-center justify-center text-primary-red shrink-0 border border-gray-100 shadow-sm">
                  <Clock size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-primary-black text-sm mb-1">Business Hours</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {siteConfig.contact.officeHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols on desktop) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-red opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary-black">
              Send us a message
            </h2>
            
            {formStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50/80 border border-green-200 text-green-900 rounded-2xl p-8 sm:p-10 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                  Thank you for reaching out. A member of our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 px-6 py-2.5 bg-white border border-green-300 rounded-full font-semibold text-sm text-green-800 hover:bg-green-100/50 shadow-sm transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-gray-700 block">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all bg-gray-50/50 focus:bg-white text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-gray-700 block">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all bg-gray-50/50 focus:bg-white text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-gray-700 block">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all bg-gray-50/50 focus:bg-white text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs sm:text-sm font-semibold text-gray-700 block">Service Interested In</label>
                    <select 
                      id="service" 
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all bg-gray-50/50 focus:bg-white appearance-none text-sm"
                    >
                      <option value="" disabled>Select a service...</option>
                      {siteConfig.services.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-gray-700 block">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all bg-gray-50/50 focus:bg-white resize-y text-sm"
                    placeholder="Please tell us a bit about your situation and goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary-black text-white rounded-xl font-bold text-sm sm:text-base hover:bg-primary-red transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[180px]"
                >
                  {formStatus === "submitting" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
