"use client";

import { useEffect, useState } from "react";

import Particles from "@tsparticles/react";

import { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {

  const [init, setInit] =
    useState(false);

  useEffect(() => {

    initParticlesEngine(async (engine) => {

      await loadSlim(engine);

    }).then(() => {

      setInit(true);

    });

  }, []);

  if (!init) return null;

  return (

    <Particles

      id="tsparticles"

      options={{

        background: {
          color: {
            value: "transparent",
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
            value: 0.3,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },
        },

        detectRetina: true,
      }}

      className="absolute inset-0 -z-10"

    />
  );
}