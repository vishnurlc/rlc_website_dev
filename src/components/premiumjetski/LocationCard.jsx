'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
const LocationCard = ({ imageSrc, location, startingPrice }) => {
  return (
    <motion.div
      className="shadow-md rounded-md overflow-hidden"
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
    >
      <div className="relative h-44 min-h-[250px]">
        <Image
          src={imageSrc}
          alt={location}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="mt-4 text-xl font-semibold">{location}</h3>
        <p className="mt-2 text-gray-500">
          Starts from <span className="text-primary">${startingPrice}/hr</span>
        </p>
        <button className="mt-4 px-4 py-2 bg-primary text-white  hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default LocationCard;
