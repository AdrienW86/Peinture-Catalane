import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Realisations />
      <Expertise />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}