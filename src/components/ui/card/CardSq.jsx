'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';
function CardSq({ data }) {
  return (
    <motion.div
      className="relative w-full aspect-[1/1.5] max-h-[35vh]"
      whileHover={{
        scale: 1.02,
      }}
    >
      <Image
        src={data.image}
        alt={data.title}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="absolute p-4 text-white w-full h-fit bg-black bg-opacity-60 bottom-0 left-0 right-0 z-10">
        <div>
          <h2 className="uppercase font-medium tracking-wide text-xs md:text-sm font-poppins">
            {data.title}
          </h2>
          {/* <span className="text-gray-400 text-sm">
          Starting from AED212
        </span> */}
        </div>

        <AnimatedBtn
          text={'Book Now'}
          msg={`I would like to book ${data.title} from Richy life Club`}
          styles={'mt-2 px-2 py-1 bg-primary text-gold rounded-sm'}
        />
      </div>
    </motion.div>
  );
}

export default CardSq;
