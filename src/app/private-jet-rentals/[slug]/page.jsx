import { ContactForm, GalleryJet } from '@/components';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <main>
      <div
        style={{
          background: 'linear-gradient(180deg, #1F83B7 0%, #A7C3DB 100%)',
        }}
        className="w-full h-auto mt-[88px] max-h-[350px] grid grid-cols-1 items-center justify-items-center"
      >
        <Image
          src="/assets/privatejet/flight.png"
          width={700}
          height={350}
          alt="filghtname"
          style={{
            height: '30vh',
            width: 'auto',
            aspectRatio: 'calc(2/1)',
          }}
        />
      </div>
      <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
        <div>
          <div>
            <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500">
              Pilatus Aircraft
            </h1>
            <span className=" inline-block my-4 font-inter text-primary font-semibold text-xl md:text-[40px]">
              PC-12
            </span>
          </div>
          <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
            The Pilatus PC-12 is a single-engine turboprop passenger and cargo
            aircraft manufactured by Pilatus Aircraft of Stans, Switzerland in
            1991. The main market for this aircraft is corporate transportation
            and regional airliner operators, and it is in direct competition
            with the King Air product line. The Pilatus PC-12 NG (Next
            Generation) was launched in 2007 and first delivered in May 2008.
          </p>
        </div>

        <div>
          <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Technical Specifications
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-9">
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Cabin Length</span>
              <span className="text-[#8a97a4]">5,16m</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Suitcases</span>
              <span className="text-[#8a97a4]">3</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Trolleys</span>
              <span className="text-[#8a97a4]">5</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Range NM</span>
              <span className="text-[#8a97a4]">1242NM</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Category</span>
              <span className="text-[#8a97a4]">Turbo Prop</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Seats</span>
              <span className="text-[#8a97a4]">8</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>No stop flyng time</span>
              <span className="text-[#8a97a4]">4,4h</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Cabin Height</span>
              <span className="text-[#8a97a4]">1,47</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Cabin Width</span>
              <span className="text-[#8a97a4]">1,53</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Cabin floor area</span>
              <span className="text-[#8a97a4]">1,30M</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Range KM</span>
              <span className="text-[#8a97a4]">2,804km</span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Speed Km/h</span>
              <span className="text-[#8a97a4]">500Km/h</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Gallery
          </h2>
          <div>
            <GalleryJet />
          </div>
        </div>
        <ContactForm
          title={'Soar to New Heights'}
          description={'Book your journey with our private jet rental now'}
        />
      </div>
    </main>
  );
};

export default page;
