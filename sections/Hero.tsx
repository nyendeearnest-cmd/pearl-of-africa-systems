"use client";

import FadeIn from "@/components/FadeIn";

import Image from "next/image";

import { motion } from "framer-motion";

export default function Hero() {

  return (

    <FadeIn>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6">

        {/* Background Image */}

        <div className="absolute inset-0">

          <Image
            src="/images/hero.jpg"
            alt="Technology"
            fill
            priority
            className="object-cover opacity-20"
          />

        </div>

        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

        {/* Animated Glow */}

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-green-400/10 blur-3xl rounded-full" />

        {/* Main Content */}

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >

            <Image
              src="/logo.png"
              alt="Pearl of Africa Systems"
              width={180}
              height={180}
              className="mx-auto mb-8 animate-float object-contain"
            />

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight"
          >

            Smart Systems.
            <br />

            <span className="text-green-400">

              African Excellence.

            </span>

          </motion.h1>

          {/* Paragraph */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed"
          >

            Building Africa’s digital future through intelligent software,
            cybersecurity, AI systems, cloud infrastructure and enterprise technology.

          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
          >

            <button className="bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95 transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-green-500/20">

              Get Started

            </button>

            <button className="border border-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">

              Our Services

            </button>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

              <h2 className="text-5xl font-bold text-green-400">

                50+

              </h2>

              <p className="text-gray-300 mt-3">

                Enterprise Projects

              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

              <h2 className="text-5xl font-bold text-green-400">

                24/7

              </h2>

              <p className="text-gray-300 mt-3">

                Technical Support

              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

              <h2 className="text-5xl font-bold text-green-400">

                AI

              </h2>

              <p className="text-gray-300 mt-3">

                Powered Solutions

              </p>

            </div>

          </motion.div>

        </div>

      </section>

    </FadeIn>
  );
}