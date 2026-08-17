"use client";

import {
  Palette,
  Headphones,
  Wrench,
  GraduationCap,
  Network,
  Wifi,
  Camera,
  FileText,
  HardDrive,
  Globe,
  Database,
  ShieldCheck,
  Brain,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    title: "Computer Training",
    icon: GraduationCap,
    description:
      "Practical training in basic computer literacy, programming, Microsoft Office, software installation, hardware knowledge and hardware replacement.",
  },

  {
    title: "Graphic Design & Branding",
    icon: Palette,
    description:
      "Professional logos, posters, flyers, business graphics and complete branding solutions for businesses and organizations.",
  },

  {
    title: "IT Support & Maintenance",
    icon: Headphones,
    description:
      "Software installation, system backups, troubleshooting, maintenance and reliable technical support.",
  },

  {
    title: "Computer Repair",
    icon: Wrench,
    description:
      "Diagnosis and repair of computer hardware and software problems, system failures and performance issues.",
  },

  {
    title: "Internship Training",
    icon: GraduationCap,
    description:
      "Hands-on ICT internship training covering programming, databases, networking, hardware, software and practical computer skills.",
  },

  {
    title: "Networking",
    icon: Network,
    description:
      "Network installation, configuration, troubleshooting and maintenance for homes, offices, schools and organizations.",
  },

  {
    title: "Internet Services",
    icon: Wifi,
    description:
      "Internet connectivity setup, Wi-Fi configuration, network sharing and troubleshooting for reliable internet access.",
  },

  {
    title: "Camera Installation",
    icon: Camera,
    description:
      "CCTV and security camera installation, configuration and maintenance for homes, businesses, schools and organizations.",
  },

  {
    title: "Reports & Proposal Generation",
    icon: FileText,
    description:
      "Professional reports, project documentation, business proposals and technical documents prepared to a high standard.",
  },

  {
    title: "Hardware Replacement",
    icon: HardDrive,
    description:
      "Computer upgrades and replacement of RAM, storage drives, power supplies, keyboards, screens and other components.",
  },

  {
    title: "Web Development",
    icon: Globe,
    description:
      "Modern responsive websites and custom web applications for businesses, schools, organizations and individuals.",
  },

  {
    title: "Database Systems",
    icon: Database,
    description:
      "Reliable database systems for managing school, business, inventory, finance and organizational information.",
  },

  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    description:
      "Security-focused solutions that help protect systems, networks and business information from common digital threats.",
  },

  {
    title: "Artificial Intelligence",
    icon: Brain,
    description:
      "AI-powered solutions and automation designed to improve productivity and simplify business processes.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-green-400 font-semibold tracking-widest mb-4">
            WHAT WE DO
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Our Services
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Practical technology solutions for individuals,
            businesses, schools and organizations.
          </p>
        </motion.div>

        {/* SERVICES */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.a
                key={service.title}
                href={`/#contact?service=${encodeURIComponent(
                  service.title
                )}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group bg-zinc-900 border border-zinc-800 hover:border-green-500 rounded-3xl p-7 transition-all duration-300 cursor-pointer"
              >

                {/* ICON */}

                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-7 group-hover:bg-green-500 transition-all duration-300">

                  <Icon
                    size={32}
                    className="text-green-400 group-hover:text-black transition"
                  />

                </div>

                {/* TITLE */}

                <h3 className="text-xl font-bold mb-4 group-hover:text-green-400 transition">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* ACTION */}

                <div className="mt-6 text-green-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                  Request this service →
                </div>

              </motion.a>
            );
          })}

        </div>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 text-center bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
        >

          <h3 className="text-3xl md:text-4xl font-bold">
            Need a Technology Solution?
          </h3>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Tell us what you need and our team will help you
            find the right solution.
          </p>

          <a
            href="/#contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95 transition duration-300 px-8 py-4 rounded-2xl text-black font-bold"
          >
            Contact Us
          </a>

        </motion.div>

      </div>
    </section>
  );
}