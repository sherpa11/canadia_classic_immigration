import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import FeaturedService from "@/components/home/FeaturedService";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import CanadaJourney from "@/components/home/CanadaJourney";
import Testimonials from "@/components/home/Testimonials";
import ConsultationCTA from "@/components/home/ConsultationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <FeaturedService />
      <WhyChooseUs />
      <ProcessTimeline />
      <CanadaJourney />
      <Testimonials />
      <ConsultationCTA />
    </>
  );
}
