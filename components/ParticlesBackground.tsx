"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#22c55e",
          },

          links: {
            color: "#22c55e",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
            },
            value: 60,
          },

          opacity: {
            value: 0.4,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
}