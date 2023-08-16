import { HeroSection2 } from '@/components';
import LocationCard from '@/components/premiumjetski/LocationCard';
import Image from 'next/image';
import React from 'react';

const locations = [
  {
    imageSrc: '/assets/jetskipage/jumeirah.png', // Replace with actual image path
    location: 'Jumeriah',
    startingPrice: 150,
  },
  {
    imageSrc: '/assets/jetskipage/jumeirah.png', // Replace with actual image path
    location: 'Burj Al Arab',
    startingPrice: 250,
  },
  {
    imageSrc: '/assets/jetskipage/jumeirah.png', // Replace with actual image path
    location: 'Atlantis View',
    startingPrice: 180,
  },
];

const page = () => {
  return (
    <main>
      <HeroSection2
        type={'video'}
        heading1={'Luxury Jetski'}
        heading2={'Rental in Dubai'}
        subheading={'Unleash Your Inner Maverick on Jetski'}
        posterurl={'/assets/jetskipage/jetskibanner.jpg'}
        btntext={'Book your ride'}
        overlay={1}
      />
      <div className="bg-black px-24 py-9 md:py-16 ">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-[50vh] max-h-[700px]">
              <Image
                src="/assets/jetskipage/jetskisample.jpg"
                fill
                alt="Premium jet ski"
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
            <div className=" flex flex-col items-start justify-center">
              <h3 className="text-2xl md:text-5xl text-gold capitalize font-inter">
                Experience Premium Jetski Tour In Dubai
              </h3>
              <p className="text-gray-300 my-6 ">
                Dive into an electrifying aquatic adventure with our premier
                jetski rental services in Dubai. Prepare to be swept away by a
                wave of exhilaration and anticipation as you embark on an
                unforgettable journey through the sparkling waters of the UAE.
                At our core, we are dedicated to crafting experiences that not
                only meet but exceed your wildest expectations. Get ready to
                submerge yourself in a realm of excitement and exploration,
                where each jetski excursion we offer becomes a cherished and
                indelible memory.
              </p>
            </div>
          </div>

          <div className=" flex flex-col gap-8 items-center justify-center w-full">
            <h3 className="text-2xl text-center md:text-5xl text-gold capitalize font-inter">
              Our Premium Locations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {locations.map((location, index) => (
                <LocationCard
                  key={index}
                  imageSrc={location.imageSrc}
                  location={location.location}
                  startingPrice={location.startingPrice}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
