'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const DestinationFilter = ({
  destinations,
  setDestination,
  selectedDestination,
}) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      setContainerWidth(containerRef.current.scrollWidth - window.innerWidth);
    }
  }, []);
  return (
    <motion.div
      className="flex gap-4 md:gap-6"
      drag={'x'}
      ref={containerRef}
      dragConstraints={{ right: 0, left: -containerWidth }}
    >
      {destinations.map((item) => (
        <button
          key={item.slug}
          onClick={() => setDestination(item.slug)}
          className={`text-gray-500 py-2 text-lg px-6 ${
            item.slug === selectedDestination
              ? 'border-b border-gray-400'
              : 'border-b border-transparent'
          }`}
        >
          {item.name}
        </button>
      ))}
    </motion.div>
  );
};

export default DestinationFilter;
