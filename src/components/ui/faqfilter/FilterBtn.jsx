'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const FilterBtn = ({ items, setCategory, category }) => {
  const containerRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && typeof window !== 'undefined') {
        setContainerWidth(containerRef.current.scrollWidth - window.innerWidth);
      }
    };

    handleResize(); // Call the function once on initial load

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef]);

  return (
    <motion.div
      ref={containerRef}
      className="relative flex items-center justify-start  gap-4 md:gap-6 px-6"
      drag="x"
      dragConstraints={{ right: 0, left: -containerWidth }}
    >
      {items?.map((item, index) => (
        <button
          key={index}
          className={`text-sm whitespace-nowrap ${
            category === item.category
              ? 'text-primary scale-110 underline underline-offset-4'
              : 'text-gray-400 '
          }`}
          onClick={() => setCategory(item.category)}
        >
          {item.value}
        </button>
      ))}
    </motion.div>
  );
};

export default FilterBtn;
