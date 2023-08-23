"use client";
import React from "react";
import { Button } from "../ui/button/Button";
import { motion } from "framer-motion";
import AnimatedBtn from "../premiumjetski/AnimatedBtn";
const AnimatedHeroText = ({ subheading, heading1, heading2, btntext }) => {
  return (
    <>
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[5vw] text-white -translate-y-1/2 p-4 md:p-8 backdrop-blur-[2px] w-full md:w-max  ">
        <motion.div
          className="text-center md:text-left"
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
          <span className="text-gold text-opacity-70 font-inter text-sm md:text-lg">
            {subheading}
          </span>
          <h1 className="text-white text-4xl md:text-[64px] leading-tight font-poppins font-bold">
            {heading1} <br /> {heading2}
          </h1>
        </motion.div>
      </div>
      <AnimatedBtn
        styles=" absolute bottom-12 left-1/2 -translate-x-1/2 z-10 bg-primary px-6 py-2 bg-opacity-80 rounded-sm text-gold border border-solid border-gold border-opacity-50"
        text={btntext}
        msg={"Hi, I would like to know about your services."}
      />
    </>
  );
};

export default AnimatedHeroText;
