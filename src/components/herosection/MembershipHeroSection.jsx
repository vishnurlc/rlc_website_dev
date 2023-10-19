'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
const MembershipHerosection = ({
  url,
  alt,
  subheading,
  heading1,
  heading2,
}) => {
  return (
    <div className="w-full relative h-[70vh] md:h-[80vh] ">
      <div className="w-full h-full  relative aspect-[16:9]">
        <Image
          src={url}
          fill
          alt={alt || 'Richy life Club UAE'}
          priority
          style={{
            objectFit: 'cover',
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
        <Link
          className="hover:scale-105  transition-all absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-primary px-6 py-2 bg-opacity-80 rounded-sm text-gold border border-solid border-gold border-opacity-50"
          href={'/membership#enquiry'}
        >
          Become a Member
        </Link>
      </div>
    </div>
  );
};

export default MembershipHerosection;
