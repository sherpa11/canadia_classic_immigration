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
        <div className="flex flex-col lg:flex-row items-stretch bg-bg-warmwhite rounded-3xl overflow-hidden shadow-sm">
          {/* Content */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 xl:p-20 order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-red mb-3">
                Permanent Residency Pathways
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading leading-tight mb-6">
                Build Your Long-Term Future in Canada.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
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
          <div className="w-full lg:w-1/2 min-h-[320px] sm:min-h-[400px] lg:min-h-full relative order-1 lg:order-2">
            <Image
              src={cityView}
              alt="Canada city view"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
