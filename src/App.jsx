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

let lenis;

function App() {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ✅ Handle anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        lenis.scrollTo(target, {
          offset: -80, // 🔥 adjust according to your navbar height
          duration: 1,
        });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    // cleanup
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
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
