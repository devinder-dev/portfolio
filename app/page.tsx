import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Skills from "@/sections/skills/Skills";
import Projects from "@/sections/projects/Projects";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <About />
      <Projects />
    </main>
  );
}

