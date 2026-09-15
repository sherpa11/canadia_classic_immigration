"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-sm font-semibold tracking-widest text-primary-red uppercase mb-4">
              About Canadian Classic
            </span>
            <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-8">
              Immigration Guidance Built Around Your Future.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Canadian Classic Immigration helps individuals and families navigate Canadian immigration with clarity, professionalism and personalized support.
              </p>
              <p>
                We focus on understanding each client's unique profile to identify the most suitable immigration pathways. From documentation support to application preparation, we provide clear communication and personalized guidance tailored to your long-term settlement goals.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Immigration Consultation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Trust Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl max-w-[280px]"
            >
              <h3 className="font-heading text-2xl mb-3 text-primary-black">Personalized Guidance</h3>
              <p className="text-sm text-gray-500">Every application is different. Your strategy should be too.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
