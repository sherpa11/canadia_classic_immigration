import { siteConfig } from "@/config/site";
import cciOwner from "./cci owner.png";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import { Metadata } from "next";
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  FileCheck, 
  MessageSquareText, 
  Sparkles 
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.companyName}`,
  description: "Learn about Canadian Classic Immigration. Ethical guidance, transparent processes, and dedicated Canadian immigration support tailored to your future.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="pt-40 sm:pt-48 pb-20 bg-gradient-to-b from-primary-black via-primary-charcoal to-primary-black text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-4xl">
          {/* Top Badges with License */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-accent-gold text-xs font-semibold uppercase tracking-widest">
              About {siteConfig.shortName}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/15 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wide shadow-xs">
              <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
              RCIC-IRB License #R1056153
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white font-bold leading-tight">
            Ethical Guidance. Transparent Process. Dedicated Support.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            A regulated Canadian immigration consultancy dedicated to crafting clear, personalized pathways for individuals, families, and professionals worldwide.
          </p>
        </div>
      </div>

      {/* Intro Overview & Metrics */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-red">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-black">
                Specializing Exclusively in Canadian Immigration
              </h2>
              <p>
                Canadian Classic Immigration is a registered and regulated firm committed to providing dependable, straightforward, and compliant immigration solutions. We focus exclusively on Canadian immigration programs, offering strategic guidance for Permanent Residency, Express Entry, Provincial Nominees, Work Permits, Study Visas, Family Sponsorship, and Citizenship.
              </p>
              <p>
                We recognize that no two immigration journeys are alike. Our consultants carefully assess your background, credentials, and settlement goals to devise an individualized plan that maximizes your approval probability while minimizing avoidable processing delays.
              </p>
            </div>

            {/* Metrics Box */}
            <div className="lg:col-span-5 bg-bg-warmwhite p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="font-heading text-xl font-bold text-primary-black pb-4 border-b border-gray-200">
                Why Clients Trust Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-xs">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-accent-gold whitespace-nowrap shrink-0">4.9 ⭐</div>
                  <div>
                    <div className="text-sm font-bold text-primary-black">Client Satisfaction</div>
                    <div className="text-xs text-gray-500">Based on verified client reviews</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-xs">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-primary-red whitespace-nowrap shrink-0">100%</div>
                  <div>
                    <div className="text-sm font-bold text-primary-black">Transparent Pricing</div>
                    <div className="text-xs text-gray-500">Zero hidden fees or surprise costs</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-xs">
                  <div className="text-xl sm:text-2xl font-heading font-bold text-primary-charcoal whitespace-nowrap shrink-0">1-on-1</div>
                  <div>
                    <div className="text-sm font-bold text-primary-black leading-snug">Dedicated Case Guidance</div>
                    <div className="text-xs text-gray-500">Regular status updates throughout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Defines Us: Vision, Mission, Achievements */}
      <div className="py-20 bg-bg-offwhite border-y border-gray-100">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-red">
              What Defines Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 text-primary-black">
              Built on Integrity, Clarity & Commitment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary-red/10 text-primary-red flex items-center justify-center mb-6">
                  <Target size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-primary-black">Our Vision</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To be the most dependable and ethical Canadian immigration partner for individuals and families worldwide, empowering every client with honest, well-informed strategies focused on long-term settlement success.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary-red/10 text-primary-red flex items-center justify-center mb-6">
                  <Compass size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-primary-black">Our Mission</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To provide transparent, accurate, and customized immigration support. We listen closely to each applicant's unique background, demystify complex IRCC policies, and guide files from initial evaluation to final approval with utmost care.
                </p>
              </div>
            </div>

            {/* Achievement */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary-red/10 text-primary-red flex items-center justify-center mb-6">
                  <Award size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-primary-black">Our Commitment</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We have proudly assisted hundreds of skilled professionals, international graduates, and reunited families across Canada with compliant, meticulously prepared applications and zero false promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message from the Director / Principal Consultant */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="bg-gradient-to-br from-bg-warmwhite via-white to-bg-warmwhite rounded-3xl p-8 sm:p-12 md:p-16 border border-gray-200/70 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              
              <div className="lg:w-1/3 text-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                  <img 
                    src={cciOwner.src}
                    alt="Immigration Consultation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading font-bold text-xl text-primary-black">
                  Principal Consultant
                </h4>
                <p className="text-xs font-bold text-primary-red uppercase tracking-wider mt-1">
                  RCIC-IRB License #R1056153
                </p>
                <p className="text-[11px] text-gray-500 font-medium">
                  College of Immigration & Citizenship Consultants (CICC)
                </p>
              </div>

              <div className="lg:w-2/3 space-y-5 text-gray-700">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-red/10 text-primary-red text-xs font-bold tracking-widest uppercase">
                  <Sparkles size={12} /> Message from the Team
                </span>
                
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-black leading-snug">
                  "Where there is a will, there is a way."
                </h3>

                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  At Canadian Classic Immigration, we listen attentively to every detail you share. Often, the smallest background detail or work experience record is what turns an uncertain case into a successful visa approval.
                </p>

                <p className="text-base leading-relaxed text-gray-600">
                  Immigration procedures can sometimes involve long waiting periods. We consider it our highest responsibility to keep you continuously informed and supported throughout the entire process, ensuring you never feel isolated or in the dark.
                </p>

                <p className="text-base leading-relaxed text-gray-600">
                  We firmly believe that when things are done with sincere dedication, precision, and adherence to Canadian regulations, nothing is impossible. It is our true privilege to help you settle smoothly and build a brighter future in Canada.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Four Core Pillars */}
      <div className="py-20 bg-bg-offwhite border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-red">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 text-primary-black">
              The Standard of Service You Can Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-primary-black mb-2">100% Transparency</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Honest assessments of your eligibility, upfront fixed consulting fees, and realistic processing timelines with zero false promises.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileCheck size={24} />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-primary-black mb-2">Meticulous Documentation</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every form, supporting letter, and legal submission is scrutinized for accuracy to minimize IRCC queries and processing delays.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-accent-gold flex items-center justify-center shrink-0">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-primary-black mb-2">Personalized Strategy</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We don't use cookie-cutter formulas. We build tailored roadmaps suited to your qualifications, language proficiency, and family aspirations.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-primary-red flex items-center justify-center shrink-0">
                <MessageSquareText size={24} />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-primary-black mb-2">Proactive Communication</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You stay informed at every critical juncture. We answer questions promptly and advise you on ongoing IRCC policy updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationCTA />
    </>
  );
}
