"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import cityView from "./city view.jpg";

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
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-red mb-3">
                Permanent Residency Pathways
              </span>
              <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-6">
                Build Your Long-Term Future in Canada.
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether through Express Entry, Provincial Nominee Programs (PNP), or specialized regional pilots, we provide the strategic guidance needed to secure your permanent status in Canada.
              </p>
              <ul className="space-y-4 mb-10 text-gray-700 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-red"></div>
                  <span>Express Entry ($2,000 and up)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-red"></div>
                  <span>Provincial Nominee Programs ($2,200 and up)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-red"></div>
                  <span>Family Class Sponsorship ($2,500 and up)</span>
                </li>
              </ul>
              <Link 
                href="/services/express-entry"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-black text-white rounded-full font-semibold hover:bg-primary-red transition-all duration-300 shadow-sm"
              >
                Explore PR Pathways
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[650px] lg:h-[500px] order-1 lg:order-2 relative">
            <Image
              src={cityView}
              alt="Canada city view"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
