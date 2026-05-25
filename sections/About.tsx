"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function About() {
 return (

  <FadeIn>
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-green-500 font-semibold mb-4">
            ABOUT US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Build Modern Digital Solutions For Africa
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Pearl of Africa Systems is a technology company focused
            on delivering enterprise software, AI systems,
            cybersecurity solutions and cloud infrastructure
            for businesses, organizations and governments.
          </p>

          <button className="mt-8 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold">
            Learn More
          </button>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-5xl font-bold text-green-500">
              50+
            </h3>

            <p className="mt-4 text-gray-400">
              Completed Projects
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-5xl font-bold text-green-500">
              20+
            </h3>

            <p className="mt-4 text-gray-400">
              Team Members
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-5xl font-bold text-green-500">
              10+
            </h3>

            <p className="mt-4 text-gray-400">
              Enterprise Clients
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-5xl font-bold text-green-500">
              24/7
            </h3>

            <p className="mt-4 text-gray-400">
              Technical Support
            </p>
          </div>

        </motion.div>

      </div>
    </section>
    </FadeIn>
  );
}