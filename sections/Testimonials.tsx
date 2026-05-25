"use client";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "CEO, FinTech Uganda",
    text: "Pearl of Africa Systems transformed our entire digital infrastructure.",
  },
  {
    name: "Sarah Williams",
    role: "Director, Cloud Africa",
    text: "Exceptional professionalism and modern engineering practices.",
  },
  {
    name: "Daniel Kim",
    role: "Startup Founder",
    text: "Their AI solutions helped automate our recruitment processes.",
  },
];

export default function Testimonials() {
  return (

  <FadeIn>
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          What Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-900 p-8 rounded-3xl"
            >

              <p className="text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="mt-6">

                <h3 className="text-xl font-bold">
                  {testimonial.name}
                </h3>

                <p className="text-gray-500">
                  {testimonial.role}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
    </FadeIn>
  );
}