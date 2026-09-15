"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  if (!siteConfig.contact.whatsappNumber) return null;
  
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <a 
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-primary-black text-white text-sm px-3 py-1.5 rounded-md whitespace-nowrap shadow-md">
          Chat with us
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-black transform rotate-45"></div>
        </div>
      </div>
    </motion.div>
  );
}
