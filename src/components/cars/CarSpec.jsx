'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { itemVariant, parentVariant } from '@/lib/animation';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
const CarSpec = ({ car }) => {
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
        className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]"
      >
        Car Specifications
      </motion.h2>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 "
        variants={parentVariant}
      >
        {car.data[0].attributes.features.data.map((feature, index) => (
          <motion.li
            variants={itemVariant}
            key={index}
            className="flex  font-inter text-sm md:text-lg w-full items-center gap-4 justify-start py-2 md:py-4 "
          >
            <span className="text-[#8a97a4]">
              <Image
                src={feature.attributes.icon.data.attributes.url}
                alt={feature.attributes.feature}
                width={30}
                height={30}
              />
            </span>
            <span>{feature.attributes.feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default CarSpec;
