"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimationImage({ children }) {
  const variants = {
    hidden: { y: -700, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 50 });

  console.log(isInView);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="h-full"
      g
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationImage;
