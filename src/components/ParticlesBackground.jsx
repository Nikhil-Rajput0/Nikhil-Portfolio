import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // load only the slim version (lighter bundle)
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10" // 👈 send particles behind content
      options={{
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // particles move away from mouse
            },
            onClick: {
              enable: true,
              mode: "push", // add more particles on click
            },
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },

        background: {
          color: {
            value: "#1a1a1a", // dark blue background
          },
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#0ff", // white particles
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 1, max: 2 },
          },
          move: {
            enable: true,
            speed: 1.7,
            direction: "bottom", // falling downward
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
