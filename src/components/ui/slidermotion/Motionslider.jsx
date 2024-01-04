'use client';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Motionslider({ children }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      setContainerWidth(containerRef.current.scrollWidth - window.innerWidth);
    }
  }, [children]);
  return (
    <motion.div
      className="flex gap-4 h-full"
      drag={'x'}
      ref={containerRef}
      dragConstraints={{ right: 0, left: -containerWidth }}
    >
      {children}
    </motion.div>
  );
}

export default Motionslider;
