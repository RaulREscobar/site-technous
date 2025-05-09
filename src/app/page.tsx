import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <AboutUs />
      <MissionVision />
      <Contact />
      <Footer />

    </main>
  );
}
