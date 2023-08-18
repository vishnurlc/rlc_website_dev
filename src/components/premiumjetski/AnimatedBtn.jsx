"use client";
import React from "react";
import { motion } from "framer-motion";
const AnimatedBtn = ({ styles, text }) => {
  return (
    <motion.button
      className={`px-6 py-2 ${styles}`}
      whileHover={{
        scale: 1.05,
      }}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedBtn;
