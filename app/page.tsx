import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Stats from "@/sections/Stats";
import Portfolio from "@/sections/Portfolio";
import Team from "@/sections/Team";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Team />
        <Contact />
        <WhatsAppButton />
      </main>

      <Footer />
    </>
  );
}