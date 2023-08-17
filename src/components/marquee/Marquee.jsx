"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Marqueesection = ({ images }) => {
  return (
    <div className="marquee overflow-hidden">
      {/* <motion.div
        className="marquee__content flex"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: images.length * 5,
          repeat: Infinity,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Car Logo ${index}`}
            className="inline-block mr-10 w-52"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Car Logo ${index}`}
            className="inline-block mr-10 w-52"
          />
        ))}
      </motion.div> */}
      <Marquee>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Car Logo ${index}`}
            className="inline-block mr-10 w-52"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Marqueesection;
