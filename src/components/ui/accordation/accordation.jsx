'use client';
import React, { useEffect, useState } from 'react';
import FaqCard from './faqcard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { parentVariant, itemVariant } from '@/lib/animation';
function FaqAccordation({ data }) {
  const [expanded, setExpanded] = useState();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const animationControl = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControl.start('visible');
    }
  }, [inView, data]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-6 w-full py-2"
      initial="hidden"
      animate={animationControl}
      variants={parentVariant}
    >
      {data?.map((item, index) => (
        <motion.div key={item.attributes.question} variants={itemVariant}>
          <FaqCard
            i={index}
            expanded={expanded}
            setExpanded={setExpanded}
            question={item.attributes.question}
            answer={item.attributes.answer}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default FaqAccordation;
