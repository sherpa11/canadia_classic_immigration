"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, FileText, HeartHandshake } from "lucide-react";

const features = [
  {
    num: "01",
    title: "Personalized Guidance",
    desc: "Every client's background, goals and circumstances are different. We approach each case individually.",
    icon: UserCheck
  },
  {
    num: "02",
    title: "Transparent Process",
    desc: "Clear communication and straightforward guidance at every stage of your application.",
    icon: ShieldCheck
  },
  {
    num: "03",
    title: "Careful Documentation",
    desc: "Thorough preparation designed to reduce avoidable mistakes and processing delays.",
    icon: FileText
  },
  {
    num: "04",
    title: "Dedicated Support",
    desc: "Stay informed and supported throughout your entire Canadian immigration journey.",
    icon: HeartHandshake
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Header */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-6">
                Why Canadian Classic Immigration?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Professional guidance. Clear communication. A process built around you.
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6 text-accent-gold">
                  <span className="font-heading text-2xl font-bold">{feature.num}</span>
                  <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-primary-red group-hover:border-primary-red group-hover:text-white transition-all duration-300">
                    <feature.icon size={20} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-heading mb-4 text-gray-100">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
