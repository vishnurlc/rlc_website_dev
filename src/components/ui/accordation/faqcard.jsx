'use client';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './partnerstep.css';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
const FaqCard = ({ i, expanded, setExpanded, question, answer }) => {
  const isOpen = i === expanded;

  const accordionVariants = {
    open: { opacity: 1, height: 'auto', marginTop: '24px' },
    collapsed: { opacity: 0, height: 0, marginTop: 0 },
  };

  return (
    <div className="bg-white text-black drop-shadow-md rounded-lg shadow-primary">
      <motion.div
        className={`py-4 px-2 ${styles.accordionHeader} `}
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex items-center justify-between">
          <p className="text-primary">{question}</p>
          <span>
            {!isOpen ? (
              <BiSolidDownArrow size={18} color={'#214842'} />
            ) : (
              <BiSolidUpArrow size={18} color={'#214842'} />
            )}
          </span>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              className="text-gray-500 font-thin text-base select-none"
              variants={accordionVariants}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {answer}
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FaqCard;
