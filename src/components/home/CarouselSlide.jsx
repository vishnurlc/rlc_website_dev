import Image from 'next/image';

import { Button } from '../ui/button/Button';
import AnimatedBtn from '../premiumjetski/AnimatedBtn';
import Link from 'next/link';

const CarouselSlide = ({ url, title, price, link }) => {
  return (
    <div className="relative w-full h-full ">
      <Image
        src={url}
        fill
        alt={title}
        style={{
          objectFit: 'cover',
          objectPosition: '50%',
          borderRadius: '5px',
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 z-10 flex items-start p-6 md:p-10 justify-end flex-col gap-4">
        <div className=" text-white ">
          <h3 className="text-xl md:text-3xl font-inter font-medium ">
            {title}
          </h3>
          {/* <span className="text-sm md:text-lg font-poppins font-light ">
            AED {price}
          </span> */}
        </div>
        <Link
          href={link}
          className="border border-white text-white px-4 py-2 rounded"
        >
          Book Now
        </Link>
      </div>
      <div className="absolute inset-0 opacity-30 bg-[#142f39]"></div>
    </div>
  );
};

export default CarouselSlide;
