import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Skills from "@/sections/skills/Skills";
import Projects from "@/sections/projects/Projects";
import Contact from "@/sections/contact/Contact";

export default function Home() {
  return (
    <main className="bg-(--bg-primary) min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

