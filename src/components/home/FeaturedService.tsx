"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedService() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center bg-bg-warmwhite rounded-3xl overflow-hidden shadow-sm">
          {/* Content */}
          <div className="w-full lg:w-1/2 p-12 lg:p-20 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span style={{ color: "white" }} >
                Permanent Residency
              </span>
              <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-6">
                Build Your Long-Term Future in Canada.
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether through Express Entry, Provincial Nominee Programs, or other specialized PR pathways, we provide the strategic guidance needed to secure your permanent status in Canada.
              </p>
              <ul className="space-y-4 mb-10 text-gray-700 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-red"></div>
                  Express Entry (FSW, CEC, FST)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-red"></div>
                  Provincial Nominee Programs (PNP)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-red"></div>
                  Family Class Sponsorship
                </li>
              </ul>
              <Link 
                href="/services/permanent-residency"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-black text-white rounded font-semibold hover:bg-primary-red transition-all duration-300"
              >
                Explore PR Options
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] order-1 lg:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Canada Permanent Residency"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
