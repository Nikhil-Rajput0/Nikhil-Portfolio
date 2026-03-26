import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact.jsx";
import ParticlesBackground from "./components/ParticlesBackground";
import Footer from "./components/Footer.jsx";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <header className="max-w-[1150px] mx-auto">
        <Header />
      </header>
      <main className="max-w-[1200px] xl:max-w-[1400px] mx-auto">
        <ParticlesBackground />
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="max-w-[1150px] mx-auto">
        <Footer />
      </footer>
    </>
  );
}

export default App;
