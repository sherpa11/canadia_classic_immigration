"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "Understand your goals, background and immigration objectives."
  },
  {
    num: "02",
    title: "Profile & Eligibility Assessment",
    desc: "Review your profile and identify appropriate pathways."
  },
  {
    num: "03",
    title: "Application Preparation",
    desc: "Prepare documents and application materials carefully."
  },
  {
    num: "04",
    title: "Submission & Ongoing Support",
    desc: "Guide you through submission, updates and next steps."
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white" id="process">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-sm font-semibold tracking-widest text-primary-red uppercase mb-4"
          >
            The Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading leading-tight"
          >
            From First Conversation<br/>to Your Canadian Journey.
          </motion.h2>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 w-full h-[1px] bg-gray-200"></div>
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative pt-24"
              >
                {/* Dot */}
                <div className="absolute top-[43px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary-red z-10"></div>
                {/* Number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 font-heading text-6xl text-bg-lightgray opacity-50 select-none z-0">
                  {step.num}
                </div>
                
                <div className="text-center">
                  <h3 className="font-heading text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:hidden before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-bg-warmwhite group-[.is-active]:bg-primary-red text-primary-red group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-heading font-bold z-10">
                {idx + 1}
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-bg-offwhite border border-gray-100 shadow-sm">
                <div className="font-heading text-4xl text-gray-200 mb-2 select-none">{step.num}</div>
                <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
