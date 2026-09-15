"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceItem } from "@/config/site";
import ServiceCard from "@/components/ui/ServiceCard";
import { Search } from "lucide-react";

interface ServicesGridProps {
  services: ServiceItem[];
}

const CATEGORIES = [
  "All Services",
  "Permanent Residency",
  "Work Permits",
  "Study Permits",
  "Visitor & Family",
  "PR & Citizenship"
] as const;

export default function ServicesGrid({ services }: ServicesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Services");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "All Services" || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.price.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Category Pills & Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            const count =
              category === "All Services"
                ? services.length
                : services.filter((s) => s.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? "bg-primary-red text-white shadow-md shadow-primary-red/20"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-primary-black border border-gray-200/80"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search programs or prices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-full bg-white border border-gray-200 text-xs sm:text-sm text-primary-black placeholder-gray-400 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceCard service={service} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-gray-100 shadow-sm">
          <p className="text-gray-500 mb-4 font-medium">No services match your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory("All Services");
              setSearchQuery("");
            }}
            className="px-5 py-2 rounded-full bg-primary-red text-white text-xs font-bold hover:bg-primary-burgundy transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
