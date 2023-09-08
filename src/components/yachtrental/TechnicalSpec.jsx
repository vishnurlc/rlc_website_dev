'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { itemVariant, parentVariant } from '@/lib/animation';
import { useInView } from 'react-intersection-observer';
const YachtTechnicalSpec = ({ yacht }) => {
  const animationControl = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      animationControl.start('visible');
    }
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      initial={'hidden'}
      animate={animationControl}
      variants={parentVariant}
    >
      <motion.h2
        variants={itemVariant}
        className="inline-block mb-4 md:mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]"
      >
        Technical Specifications
      </motion.h2>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-x-9  "
        variants={parentVariant}
      >
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Make</span>
          <span className="text-[#8a97a4]">
            {yacht.data[0].attributes.make.data.attributes.make}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Model</span>
          <span className="text-[#8a97a4]">
            {yacht.data[0].attributes.model.data.attributes.model}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Length</span>
          <span className="text-[#8a97a4]">
            {yacht.data[0].attributes.technicalspec.length}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Capacity</span>
          <span className="text-[#8a97a4]">
            {`${yacht.data[0].attributes.technicalspec.capacity} People ${
              yacht.data[0].attributes.technicalspec.overnight
                ? `, ${yacht.data[0].attributes.technicalspec.overnight} overnight`
                : ''
            }`}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Category</span>
          <span className="text-[#8a97a4]">
            {yacht.data[0].attributes.technicalspec.category}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Rooms</span>
          <span className="text-[#8a97a4]">
            {yacht.data[0].attributes.technicalspec.rooms}
          </span>
        </motion.li>
        {yacht.data[0].attributes.technicalspec.stereo_system && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
          >
            <span>Stereo System</span>
            <span className="text-[#8a97a4]">
              {yacht.data[0].attributes.technicalspec.stereo_system}
            </span>
          </motion.li>
        )}
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Make Year</span>
          <span className="text-[#8a97a4]">
            {yacht.data[0].attributes.technicalspec.make_year}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Speed</span>
          <span className="text-[#8a97a4]">
            {yacht.data[0].attributes.technicalspec.speed} knots
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Minimum Hours</span>
          <span className="text-[#8a97a4]">
            {yacht.data[0].attributes.technicalspec.min_hours} hours
          </span>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default YachtTechnicalSpec;
