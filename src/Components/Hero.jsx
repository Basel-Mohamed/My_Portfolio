import { HERO_CONTENT } from "./../constants/index";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export default function Hero() {
  return (
    <div id="home" className="border-b border-neutral-900 pb-20 lg:pb-35  mt-40 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl hover:scale-105 transition duration-200"
            >
              Basel Mohamed
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" hover:scale-105 transition duration-200 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="hover:scale-105 transition duration-200 my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center hover:scale-105 transition duration-250">
            <DotLottieReact
              src="https://lottie.host/9b5de34d-6644-4459-831c-14438a5bd516/jBZ2PIcfd8.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </div>
  );
}
