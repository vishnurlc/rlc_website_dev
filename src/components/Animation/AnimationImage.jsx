'use client';
import React, { useEffect } from 'react';
import { animate, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimationImage({ children }) {
  const variants = {
    hidden: { y: -300, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="h-full"
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationImage;
