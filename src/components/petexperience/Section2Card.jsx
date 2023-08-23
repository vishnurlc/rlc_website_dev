'use client';
import Image from 'next/image';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const Section2Card = ({ data, hovered, setHovered }) => {
  return (
    <div className="">
      <div className="relative" onMouseOver={() => setHovered(data.id)}>
        <Image
          src={data.img}
          alt="Animal Name"
          width={800}
          height={422}
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            aspectRatio: 'calc(800/600)',
            width: '100%',
            height: 'auto',
            maxWidth: '800px',
            borderRadius: '5px',
          }}
        />
        <AnimatePresence>
          {hovered != data.id && (
            <motion.div
              exit={{
                opacity: 0,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity as needed
              }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="py-6 flex flex-col gap-4 ">
        {/* <div>
          <h3 className="text-gold mb-4">{data?.title}</h3>
          <p className="text-white w-full md:w-10/12">{data?.description}</p>
        </div> */}
        <button className="bg-primary w-fit px-6 py-2  bg-opacity-50 rounded-sm text-white ">
          {data.buttontext}
        </button>
      </div>
    </div>
  );
};

export default Section2Card;
