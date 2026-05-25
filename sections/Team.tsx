"use client";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
  },
  {
    name: "Sarah Smith",
    role: "Lead Developer",
  },
  {
    name: "David Kim",
    role: "AI Engineer",
  },
  {
    name: "Grace Lee",
    role: "Cybersecurity Expert",
  },
];

export default function Team() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden"
            >

              <div className="h-72 bg-gradient-to-br from-green-500 to-blue-500"></div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-gray-400 mt-2">
                  {member.role}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}