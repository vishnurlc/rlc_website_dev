import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button/Button';
import Link from 'next/link';

const Jetcard = ({ data }) => {
  return (
    <div className="py-[24px] md:py-[75px] px-5">
      <div className="max-w-[1152px] mx-auto relative rounded-none md:rounded-md overflow-hidden">
        <Image
          src={data.url}
          alt={data.title}
          width={1152}
          height={550}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          className="h-[40vh] md:h-[50vh]"
        />
        <div className="absolute inset-0 z-10 flex items-end p-6 md:p-10 justify-end flex-col gap-4 bg-opacity-30 bg-[#142f39]">
          <div className="flex flex-col gap-3 md:gap-5">
            <div className=" text-white">
              <h3 className="text-xl md:text-3xl font-inter font-medium ">
                {data.title}
              </h3>
              <span className="text-sm md:text-lg font-poppins font-light ">
                AED {data.price}/hr
              </span>
            </div>
            <Link
              href={'#'}
              className="text-center text-xs md:text-base py-2 md:px-6 md:py-3 border border-solid border-white text-white "
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jetcard;
