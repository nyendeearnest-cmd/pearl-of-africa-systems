"use client";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise ERP System",
    image: "/images/projects/project1.jpg",
    category: "Business Systems",
  },

  {
    title: "Cybersecurity Platform",
    image: "/images/projects/project2.jpg",
    category: "Security",
  },

  {
    title: "AI Analytics Dashboard",
    image: "/images/projects/project4.jpg",
    category: "Artificial Intelligence",
  },
];

export default function Portfolio() {

  return (
    <section className="bg-black text-white py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
            Innovative digital systems transforming businesses across Africa.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <p className="text-green-500 mb-3">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}