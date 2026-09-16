"use client";

import { motion } from "framer-motion";
import cciOwner from "./cci owner.png";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-red/10 border border-primary-red/20 mb-4">
              <span className="text-xs font-bold tracking-widest text-primary-red uppercase">
                About Canadian Classic
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-6">
              Ethical Guidance. Transparent Process. Dedicated Support.
            </h2>
            
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Canadian Classic Immigration is a registered consultancy helping individuals, skilled professionals, and families navigate Canadian immigration programs with certainty and peace of mind.
              </p>
              <p>
                We listen attentively to each client’s unique background to build a customized roadmap that minimizes risks and avoids common delays. Our core principle is simple: <em>"Where there is a will, there is a way."</em>
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm sm:text-base font-semibold text-primary-charcoal">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-primary-red shrink-0" />
                <span>Exclusively Canadian Immigration</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-primary-red shrink-0" />
                <span>100% Upfront Fixed Fees</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-primary-red shrink-0" />
                <span>Meticulous Document Checks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-primary-red shrink-0" />
                <span>Constant Client Updates</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-primary-red hover:text-primary-burgundy transition-colors group"
            >
              <span>Read Our Full Story & Mission</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5] relative shadow-lg">
              <img 
                  src={cciOwner.src}
                  alt="Immigration Consultation" 
                  className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Trust Card 1: Review Score */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -top-6 -right-4 sm:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3.5"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-accent-gold">
                <Star size={22} className="fill-accent-gold" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-primary-black leading-none mb-1">4.9 / 5.0</div>
                <div className="text-xs text-gray-500">Verified Client Rating</div>
              </div>
            </motion.div>

            {/* Floating Trust Card 2: Transparency */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[280px] border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-2 text-primary-red">
                <ShieldCheck size={20} />
                <span className="text-xs font-bold uppercase tracking-wider">Transparent Fees</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-1 text-primary-black leading-snug">Personalized Roadmaps</h3>
              <p className="text-xs text-gray-500">No false promises. Just honest, results-oriented guidance.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
