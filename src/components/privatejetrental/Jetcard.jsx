'use client';
import Image from 'next/image';

import { Button } from '../ui/button/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Jetcard = ({ data }) => {
  const pathName = usePathname();

  return (
    <div className=" md:px-5">
      <div className="max-w-[1152px] mx-auto relative md:rounded-md overflow-hidden">
        <Image
          src={data.url}
          alt={`${data.title} charters - Private Jet Charters | Richy life Club`}
          width={1152}
          height={550}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          className="h-[30vh] md:h-[50vh]"
        />
        <div className="absolute inset-0 z-10 flex items-end p-6 md:p-12 justify-end flex-col gap-4 bg-opacity-30 bg-[#142f39]">
          <div className="flex flex-col gap-3 md:gap-5 items-end">
            <div className=" text-white flex justify-center flex-col items-end">
              <h3 className="text-xl md:text-3xl  font-inter font-medium text-left">
                {data.title}
              </h3>
              {/* <span className="text-sm md:text-base font-poppins font-light">
                AED {data.price}/hr
              </span> */}
            </div>
            <Link
              href={`${pathName}/${data.slug}`}
              className="text-center w-fit text-xs md:text-base py-2 px-4 md:px-6 md:py-3 border border-solid border-white text-white "
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
