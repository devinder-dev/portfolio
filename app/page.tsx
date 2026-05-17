import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Skills from "@/sections/skills/Skills";
import Projects from "@/sections/projects/Projects";
import Contact from "@/sections/contact/Contact";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="bg-(--bg-primary) min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}

