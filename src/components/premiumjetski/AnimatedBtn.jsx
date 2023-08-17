'use client';
import React from 'react';
import { motion } from 'framer-motion';
const AnimatedBtn = ({ styles, text }) => {
  return (
    <motion.button
      className="bg-gold text-white px-6 py-2 rounded-md"
      whileHover={{
        scale: 1.05,
      }}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedBtn;
