import { siteConfig } from "@/config/site";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.companyName}`,
  description: "Learn more about our dedication to providing reliable and transparent Canadian immigration solutions.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-40 sm:pt-48 pb-20 bg-bg-offwhite">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="block text-sm font-semibold tracking-widest text-primary-red uppercase mb-4">
            About {siteConfig.shortName}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 max-w-4xl mx-auto">
            Immigration Guidance Built Around Your Future.
          </h1>
        </div>
      </div>
      
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-2xl font-light leading-relaxed mb-10 text-primary-charcoal">
              Canadian Classic Immigration is a registered and regulated firm dedicated to providing reliable and transparent Canadian immigration solutions. We specialize exclusively in Canada immigration, offering expert guidance for Permanent Residency, Study Permits, Work Permits, Visitor Visas, and more.
            </p>
            
            <p>
              We take the time to understand each client’s unique background, goals, and eligibility to craft a personalized immigration strategy. Our team carefully analyzes every case to identify the best possible pathway while minimizing risks and chances of refusal.
            </p>
            
            <p>
              With years of experience and in-depth knowledge of Canadian immigration laws and programs, our qualified consultants ensure that every application is accurate, complete, and aligned with current regulations. We stay updated with the latest policy changes so our clients always receive the most relevant and effective advice.
            </p>
            
            <h2 className="font-heading text-3xl mt-16 mb-6 text-primary-black">Our Commitment to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-bg-warmwhite p-8 rounded-2xl">
                <h3 className="font-heading text-xl mb-3 text-primary-red">Transparency</h3>
                <p className="text-base m-0">Clear communication about your chances, costs, and processing times. No hidden fees or false promises.</p>
              </div>
              <div className="bg-bg-warmwhite p-8 rounded-2xl">
                <h3 className="font-heading text-xl mb-3 text-primary-red">Professionalism</h3>
                <p className="text-base m-0">Meticulous attention to detail in every application, ensuring all forms and documents are perfectly prepared.</p>
              </div>
              <div className="bg-bg-warmwhite p-8 rounded-2xl">
                <h3 className="font-heading text-xl mb-3 text-primary-red">Personalized Care</h3>
                <p className="text-base m-0">You are not just a file number. We treat every client's journey with the respect and dedication it deserves.</p>
              </div>
              <div className="bg-bg-warmwhite p-8 rounded-2xl">
                <h3 className="font-heading text-xl mb-3 text-primary-red">Continuous Support</h3>
                <p className="text-base m-0">From the initial consultation until you reach your goal in Canada, we stand by your side.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ConsultationCTA />
    </>
  );
}
