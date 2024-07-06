"use client";

import { Button } from "../ui/button/Button";
import { motion } from "framer-motion";
import AnimatedBtn from "../premiumjetski/AnimatedBtn";
const AnimatedHeroText = ({ subheading, heading1, heading2, btntext }) => {
  return (
    <>
      {/* <div className="absolute bg-black z-10 top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[5vw] text-white -translate-y-1/2 p-4 md:p-8 backdrop-blur-[2px] w-full md:w-max  "> */}
      <div className="absolute z-10 top-1/3 w-full">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-9"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <h1 className="text-white text-4xl md:text-[64px] lg:text-[100px] leading-tight font-poppins font-bold">
            {heading1} <br /> {heading2}
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default AnimatedHeroText;
