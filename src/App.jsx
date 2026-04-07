import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import { useActiveSection } from "./hooks/useActiveSection";

export default function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: "'Geist', sans-serif" }}>
      <Nav active={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
