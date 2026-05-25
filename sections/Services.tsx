"use client";

import {
  Globe,
  Shield,
  Database,
  Brain,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    icon: Globe,

    description:
      "Modern enterprise websites and scalable web applications.",
  },

  {
    title: "Cyber Security",
    icon: Shield,

    description:
      "Advanced security systems and infrastructure protection.",
  },

  {
    title: "Database Systems",
    icon: Database,

    description:
      "Reliable, scalable and optimized enterprise databases.",
  },

  {
    title: "Artificial Intelligence",
    icon: Brain,

    description:
      "AI-powered automation and intelligent digital systems.",
  },
];

export default function Services() {

 return (

 
    <section className="bg-black text-white py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold">

            Our Services

          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">

            Delivering intelligent technology solutions for modern African businesses and organizations.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="bg-zinc-900 border border-zinc-800 hover:border-green-500 transition-all duration-300 rounded-3xl p-8"
              >

                <div className="bg-green-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">

                  <Icon
                    size={40}
                    className="text-green-500"
                  />

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {service.title}

                </h3>

                <p className="text-gray-400 leading-relaxed">

                  {service.description}

                </p>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
   
  );
}