import { siteConfig } from "@/config/site";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import ServicesGrid from "@/components/services/ServicesGrid";
import { Metadata } from "next";
import { ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Our Services & Transparent Pricing | ${siteConfig.companyName}`,
  description: "Explore our comprehensive range of Canadian immigration services with transparent pricing. Express Entry, PNP, Work Permits, Study Permits, and Family Sponsorship.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="pt-40 sm:pt-48 pb-16 bg-gradient-to-b from-primary-black via-primary-charcoal to-primary-black text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-4 text-accent-gold text-xs font-semibold uppercase tracking-widest">
            100% Transparent Fee Structure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white font-bold leading-tight">
            Our Canadian Immigration Services
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Professional representation across all major Canadian immigration streams with upfront, competitive pricing and zero hidden fees.
          </p>
        </div>
      </div>

      {/* Pricing Guarantee Banner */}
      <div className="bg-bg-warmwhite border-b border-gray-200/70 py-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-primary-black text-sm sm:text-base">
                  Honest & Transparent Representation Fees
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Listed prices cover our professional consulting and application filing services. IRCC government fees are paid separately.
                </p>
              </div>
            </div>
            <Link
              href={siteConfig.urls.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary-red hover:bg-primary-burgundy text-white text-xs sm:text-sm font-bold rounded-full whitespace-nowrap transition-colors shadow-sm"
            >
              Book Assessment
            </Link>
          </div>
        </div>
      </div>
      
      {/* Interactive Filterable Services Grid */}
      <div className="py-16 sm:py-20 bg-bg-offwhite min-h-[600px]">
        <div className="container mx-auto px-6 md:px-12">
          <ServicesGrid services={siteConfig.services} />
        </div>
      </div>

      {/* FAQ & Support Section */}
      <div className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <div className="w-12 h-12 rounded-full bg-primary-red/10 text-primary-red flex items-center justify-center mx-auto mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary-black">
            Not sure which pathway is right for you?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Book a personalized consultation. We evaluate your education, language test results, work experience, and family background to craft the best strategy.
          </p>
          <Link
            href={siteConfig.urls.consultation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-black hover:bg-primary-red text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Start Your Case Assessment
          </Link>
        </div>
      </div>
      
      <ConsultationCTA />
    </>
  );
}
