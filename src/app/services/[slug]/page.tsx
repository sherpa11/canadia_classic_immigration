import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, HelpCircle, Shield, UserCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.id === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} | ${siteConfig.companyName}`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.id === slug);
  
  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <div className="pt-40 lg:pt-48 pb-24 bg-gradient-to-b from-primary-black via-primary-black/95 to-primary-charcoal text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-accent-gold text-xs font-semibold uppercase tracking-widest">
              {service.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-red/20 backdrop-blur-md border border-primary-red/30 text-white text-xs font-bold uppercase tracking-wider">
              Fee: {service.price}
            </span>
          </div>
          <h1 style={{ color: "white" }} className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={siteConfig.urls.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gradient-to-r from-primary-red to-primary-burgundy text-white rounded-full font-bold hover:shadow-lg hover:shadow-primary-red/30 transition-all duration-300"
            >
              Book a Consultation ({service.price})
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-bg-offwhite">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          
          {/* Overview Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
            <h2 className="font-heading text-3xl font-bold mb-6 text-primary-black flex items-center gap-3">
              <Shield className="text-primary-red" size={28} />
              Program Overview
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Navigating the process for <strong>{service.title}</strong> requires careful planning, deep understanding of Canadian immigration regulations, and thorough documentation. At Canadian Classic Immigration, we ensure your application strategy aligns with current immigration criteria to minimize processing delays and avoid common pitfalls.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every applicant has a unique background. Our dedicated team analyzes your qualifications, work history, language scores, and family circumstances to identify optimal pathways under this program.
            </p>
          </div>

          {/* Who It's For & What We Help With Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-heading text-2xl font-bold mb-6 text-primary-black flex items-center gap-2.5">
                <UserCheck className="text-primary-red" size={24} />
                Who Is This For?
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-gold mt-1 shrink-0" />
                  <span>Individuals seeking long-term status or authorized entry into Canada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-gold mt-1 shrink-0" />
                  <span>Professionals and skilled workers wanting to leverage their experience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-gold mt-1 shrink-0" />
                  <span>Families looking for comprehensive guidance on sponsorship and relocation.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-heading text-2xl font-bold mb-6 text-primary-black flex items-center gap-2.5">
                <FileText className="text-primary-red" size={24} />
                What We Help With
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-gold mt-1 shrink-0" />
                  <span>Comprehensive eligibility and CRS/points assessment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-gold mt-1 shrink-0" />
                  <span>Document verification, translations, and checklist management.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-gold mt-1 shrink-0" />
                  <span>Full application preparation, portal submission, and status tracking.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step-by-Step Pathway */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
            <h2 className="font-heading text-3xl font-bold mb-8 text-primary-black">
              How the Process Works
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Initial Assessment", desc: "We review your credentials, work background, language results, and goals." },
                { step: "02", title: "Strategy & Checklist", desc: "You receive a tailored roadmap and document checklist specific to your profile." },
                { step: "03", title: "Review & Filing", desc: "Our team reviews every detail for accuracy and submits the application through the official portal." },
                { step: "04", title: "Ongoing Representation", desc: "We monitor communications from Canadian authorities and advise you until final decisions are reached." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start p-4 rounded-2xl bg-bg-warmwhite/60">
                  <span className="font-heading text-2xl font-bold text-primary-red shrink-0 w-8">{item.step}</span>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-primary-black mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
            <h2 className="font-heading text-3xl font-bold mb-8 text-primary-black flex items-center gap-3">
              <HelpCircle className="text-primary-red" size={28} />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group border border-gray-200 rounded-2xl bg-bg-offwhite [&_summary::-webkit-details-marker]:hidden p-5 cursor-pointer">
                <summary className="flex items-center justify-between font-heading font-semibold text-lg text-primary-black">
                  What documents are typically needed for {service.title}?
                  <span className="ml-2 transition-transform duration-300 group-open:-rotate-180 text-primary-red">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
                  Required documents vary depending on your profile, but typically include valid passports, educational credential assessments (ECA), language test scorecards (IELTS/CELPIP/TEF), employment reference letters, and police certificates. We provide an exact tailored checklist during our consultation.
                </p>
              </details>

              <details className="group border border-gray-200 rounded-2xl bg-bg-offwhite [&_summary::-webkit-details-marker]:hidden p-5 cursor-pointer">
                <summary className="flex items-center justify-between font-heading font-semibold text-lg text-primary-black">
                  How long does the application take to process?
                  <span className="ml-2 transition-transform duration-300 group-open:-rotate-180 text-primary-red">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
                  Processing times depend on IRCC's official queues, background checks, and the specific program category. We keep clients updated with current average government processing timelines throughout their journey.
                </p>
              </details>

              <details className="group border border-gray-200 rounded-2xl bg-bg-offwhite [&_summary::-webkit-details-marker]:hidden p-5 cursor-pointer">
                <summary className="flex items-center justify-between font-heading font-semibold text-lg text-primary-black">
                  Do you guarantee visa or PR approval?
                  <span className="ml-2 transition-transform duration-300 group-open:-rotate-180 text-primary-red">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
                  No legitimate Canadian immigration consultant can guarantee visa or PR approval, as all final decisions rest strictly with the Government of Canada / IRCC. What we do guarantee is meticulous application preparation, accurate documentation, and honest strategic advice designed to maximize your likelihood of approval.
                </p>
              </details>
            </div>
          </div>

          {/* Quick Back to Services link */}
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-primary-red font-semibold hover:underline">
              ← View All Canadian Immigration Services
            </Link>
          </div>

        </div>
      </div>

      <ConsultationCTA />
    </>
  );
}
