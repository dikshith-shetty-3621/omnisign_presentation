import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {}, []);

  const options: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: false },
        resize: { enable: true },
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
      },
    },
    particles: {
      color: {
        value: ["#06b6d4", "#a855f7", "#ec4899", "#ffffff"],
      },
      links: {
        color: "#a855f7",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 0.6,
        straight: false,
      },
      number: {
        density: { enable: true },
        value: 80,
      },
      opacity: {
        value: { min: 0.05, max: 0.4 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesBackground;
