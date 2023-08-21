'use client';
import React from 'react';
import { FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';
const Loader = () => {
  return (
    <motion.div
      initial={{
        scale: 1.0,
        opacity: 0.25,
        rotate: 0,
      }}
      animate={{
        scale: 0.9,
        opacity: 0.75,
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
      }}
      className="flex items-center justify-center"
    >
      <FiLoader size={32} color="white" />
    </motion.div>
  );
};

export default Loader;
