import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/reveal";
import Skills from "@/components/Skills";
import { Skiper31 } from "@/components/ui/skiper-ui/skiper31";

export default function Home() {
  return (
    <main className="smooth-scroll">
      <Navbar />
      <Reveal direction="down">
        <Hero />
      </Reveal>
      <Reveal direction="up">
        <About />
      </Reveal>
      <Reveal direction="down">
        <Experience />
      </Reveal>
      <Reveal direction="left">
        <Skills />
      </Reveal>
      <Reveal direction="right">
        <Projects />
      </Reveal>
      <Contact />
      <Footer />
    </main>
  );
}
