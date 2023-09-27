'use client';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const FooterInstagram = ({ images }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      setContainerWidth(containerRef.current.scrollWidth - window.innerWidth);
    }
  }, []);
  return (
    <motion.div
      className="flex min-h-[100px]"
      drag={'x'}
      ref={containerRef}
      dragConstraints={{ right: 0, left: -containerWidth }}
    >
      {images.map((e, index) => (
        <div
          key={index}
          className="min-w-[200px] h-auto aspect-square flex-1 relative"
          // style={{
          //   background: `url(${e})`,
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          // }}
        >
          <Image
            loading="lazy"
            fill
            src={e}
            alt="Instagram Images Richy life"
            style={{
              objectFit: 'cover',
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        // <div className="relative" key={index}>

        //   <div className="absolute inset-0 z-10 cursor-grab"></div>
        // </div>
      ))}
    </motion.div>
  );
};

export default FooterInstagram;
