"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./partnerstep.css";

const FaqCard = ({ i, expanded, setExpanded, question, answer }) => {
  const isOpen = i === expanded;

  const accordionVariants = {
    open: { opacity: 1, height: "auto", marginTop: "24px" },
    collapsed: { opacity: 0, height: 0, marginTop: 0 },
  };

  return (
    <div className="bg-white text-black drop-shadow-md rounded-lg">
      <motion.div
        className={`p-2 ${styles.accordionHeader} cursor-pointer`}
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex items-center justify-between text-black">
          <p>{question}</p>
          <span>
            {!isOpen ? (
              <svg
                width="42"
                height="43"
                viewBox="0 0 42 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 36813">
                  <rect
                    id="Rectangle 4268"
                    x="0.0146484"
                    y="0.572266"
                    width="41.5"
                    height="41.6755"
                    rx="8"
                    fill="#212631"
                    fillOpacity="0.09"
                  />
                  <g id="Group 36811">
                    <path
                      id="Vector"
                      d="M20.7646 12.2211C20.1295 12.2211 19.6146 12.736 19.6146 13.3711V29.4472C19.6146 30.0823 20.1295 30.5972 20.7646 30.5972C21.3998 30.5972 21.9146 30.0823 21.9146 29.4472V13.3711C21.9146 12.736 21.3998 12.2211 20.7646 12.2211Z"
                      fill="#212631"
                      stroke="#212631"
                      strokeWidth="0.3"
                      strokeLinecap="round"
                    />
                    <path
                      id="Vector_2"
                      d="M12.7646 20.2543C12.1287 20.2543 11.6146 20.7742 11.6146 21.4085C11.6146 22.0428 12.1287 22.5628 12.7646 22.5628H28.7646C29.4006 22.5628 29.9146 22.0428 29.9146 21.4085C29.9146 20.7742 29.4006 20.2543 28.7646 20.2543H12.7646Z"
                      fill="#212631"
                      stroke="#212631"
                      strokeWidth="0.3"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.015625"
                  y="0.111328"
                  width="41.5"
                  height="41.6755"
                  rx="8"
                  fill="#212631"
                />
                <path
                  d="M28.7656 22.1038C29.4016 22.1038 29.9156 21.5838 29.9156 20.9495C29.9156 20.3152 29.4016 19.7953 28.7656 19.7953H12.7656C12.1297 19.7953 11.6156 20.3152 11.6156 20.9495C11.6156 21.5838 12.1297 22.1038 12.7656 22.1038H28.7656Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.3"
                  strokeLinecap="round"
                />
              </svg>
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
              className="text-gray_400 font-thin text-base"
              variants={accordionVariants}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
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
