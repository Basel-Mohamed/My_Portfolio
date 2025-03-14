import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si"; 
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        {/* HTML */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        {/* CSS */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        {/* JavaScript */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        {/* TypeScript */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-600" />
        </motion.div>
        {/* React */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        {/* React Native */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandReactNative className="text-7xl text-purple-500" />
        </motion.div>
        {/* Bootstrap */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>
        {/* Tailwind CSS */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>
        {/* Next.js */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNextdotjs className="text-7xl text-black" />
        </motion.div>
      </motion.div>
    </div>
  );
}
