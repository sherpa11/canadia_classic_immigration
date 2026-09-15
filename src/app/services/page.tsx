import { siteConfig } from "@/config/site";
import ServiceCard from "@/components/ui/ServiceCard";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.companyName}`,
  description: "Explore our comprehensive range of Canadian immigration services tailored to your goals.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-40 sm:pt-48 pb-20 bg-bg-offwhite">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer specialized guidance across a wide range of Canadian immigration programs to help you achieve your goals.
          </p>
        </div>
      </div>
      
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </div>
      
      <ConsultationCTA />
    </>
  );
}
