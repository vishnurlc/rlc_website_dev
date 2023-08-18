import { ContactForm, HeroSection, SectionHeading } from '@/components';
import Image from 'next/image';
import React from 'react';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';
const page = () => {
  return (
    <main>
      <HeroSection
        type={'image'}
        url={'/assets/premiumgoldjetski/goldenjetski.png'}
        alt={'Premium Golden Jetski'}
      />
      <h1 className="sr-only"> Premium Golden Jetski Rental </h1>
      <div className="px-6 py-16 bg-[#111618]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            title={'Golden Jetski Delight'}
            description={' Unveiling the Ultimate Thrills and Hourly Rates'}
            title_color={'gold'}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-16">
            <div className="">
              <div className="text-white mb-7">
                <h2 className="text-4xl mb-6">
                  Luxury and Speed
                  <br />
                  Yamaha&apos;s Golden Jetski
                </h2>
                <p className="text-gray-500 text-base tracking-wide ">
                  Introducing the epitome of aquatic opulence - the Yamaha
                  Golden Jetski. This masterpiece of engineering combines sleek
                  design with unparalleled performance, promising an
                  adrenaline-packed ride like no other. Feel the rush as you
                  take control of this powerful beast, capable of reaching a top
                  speed of 67 mph, ensuring an exhilarating ride that will leave
                  you craving for more.
                </p>
              </div>
              <AnimatedBtn text={'Book Now'} />
            </div>
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src={'/assets/premiumgoldjetski/goldenjetski.png'}
                alt="Yamaha Golden Jetski "
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className="jetskigradient absolute inset-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 md:my-16">
        <ContactForm
          title={'Unleash Luxury and Speed'}
          description={'Book now for an Unforgettable Jetski Adventure'}
        />
      </div>
    </main>
  );
};

export default page;
