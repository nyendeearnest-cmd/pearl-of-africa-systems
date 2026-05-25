"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="fixed inset-0 bg-black z-[200] flex items-center justify-center pointer-events-none"
    >

      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "reverse",
        }}
        className="text-4xl font-bold text-green-500"
      >
        Pearl of Africa Systems
      </motion.h1>

    </motion.div>
  );
}