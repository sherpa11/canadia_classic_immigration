"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Curve-Edged Rectangle Header */}
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 transition-all duration-500 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-7xl rounded-2xl md:rounded-[2rem] px-5 sm:px-8 py-3 md:py-3.5 flex justify-between items-center transition-all duration-500 ${
            isScrolled
              ? "bg-white/85 backdrop-blur-xl border border-gray-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.1)] text-primary-black"
              : "bg-black/40 backdrop-blur-xl border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.35)] text-white"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3.5 z-50 shrink-0">
            {/* Official Emblem */}
            <div
              className={`relative w-11 h-11 md:w-13 md:h-13 rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:scale-105 shrink-0 bg-white p-1 flex items-center justify-center ${
                isScrolled
                  ? "ring-2 ring-primary-red/25 shadow-black/10"
                  : "ring-2 ring-white/40 shadow-black/30"
              }`}
            >
              <img
                src="/logo.png"
                alt="Canadian Classic Immigration"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span
                className={`font-heading font-black text-xl sm:text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-primary-black" : "text-white drop-shadow-sm"
                }`}
              >
                CANADIAN CLASSIC
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                    isScrolled ? "text-primary-red" : "text-accent-gold"
                  }`}
                >
                  IMMIGRATION
                </span>
                <span
                  className={`hidden sm:inline-block w-5 h-[1.5px] rounded-full transition-colors ${
                    isScrolled ? "bg-gray-300" : "bg-white/30"
                  }`}
                ></span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <ul className="flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 text-base md:text-lg font-semibold tracking-wide transition-all duration-300 rounded-xl group ${
                        isActive
                          ? isScrolled
                            ? "text-primary-red font-bold"
                            : "text-white font-bold"
                          : isScrolled
                          ? "text-primary-charcoal hover:text-primary-red hover:bg-gray-100/70"
                          : "text-gray-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.name}

                      {/* Active Indicator Underline */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className={`absolute bottom-0.5 left-3 right-3 h-[3px] rounded-full ${
                            isScrolled ? "bg-primary-red" : "bg-accent-gold"
                          }`}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Book a Consultation CTA Button */}
            <Link
              href={siteConfig.urls.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden flex items-center gap-2.5 px-6 py-3 rounded-full text-sm md:text-base font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-gradient-to-r from-primary-red via-[#d32f2f] to-primary-burgundy text-white shadow-[0_6px_20px_rgba(198,40,40,0.35)] hover:shadow-[0_10px_25px_rgba(198,40,40,0.45)]"
                  : "bg-white text-primary-black shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-accent-gold hover:text-white hover:shadow-[0_10px_28px_rgba(201,168,106,0.4)]"
              }`}
            >
              {/* Subtle hover light sweep */}
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>

              <span className="relative z-10">Book a Consultation</span>
              <ArrowRight
                size={17}
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden z-50 p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled || mobileMenuOpen
                ? "bg-gray-100 text-primary-black hover:bg-gray-200"
                : "bg-white/15 text-white backdrop-blur-md border border-white/25 hover:bg-white/25"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-4 sm:inset-6 z-40 bg-white/95 backdrop-blur-2xl rounded-3xl p-8 flex flex-col shadow-2xl border border-gray-100 lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center pb-6 border-b border-gray-100 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-primary-red font-bold">
                Menu Navigation
              </span>
            </div>

            <ul className="flex flex-col space-y-4 flex-grow">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-2xl font-heading font-bold transition-colors block py-2 flex items-center justify-between ${
                        isActive
                          ? "text-primary-red pl-3 border-l-4 border-primary-red"
                          : "text-primary-black hover:text-primary-red"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ArrowRight size={18} className="text-gray-300" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Quick Contact Info in Mobile Menu */}
            <div className="pt-6 pb-6 border-t border-gray-100 space-y-3 text-sm text-gray-600">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 text-primary-charcoal font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-bg-warmwhite flex items-center justify-center text-primary-red">
                  <Phone size={15} />
                </div>
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-primary-charcoal font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-bg-warmwhite flex items-center justify-center text-primary-red">
                  <Mail size={15} />
                </div>
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="mt-auto">
              <Link
                href={siteConfig.urls.consultation}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-red to-primary-burgundy text-white rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Book a Consultation</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
