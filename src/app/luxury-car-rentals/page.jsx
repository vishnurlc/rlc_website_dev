import {
  ContactForm,
  HeroSection,
  ListingComponent,
  SectionHeading,
} from '@/components';
import Marquee from '@/components/marquee/Marquee';
import MasonryGrid from '@/components/yachtrental/PictureGallery';
import React from 'react';

export const metadata = {
  title: 'Luxury Car Rental Dubai',
  description:
    "Experience luxury and style with Richylife Club's premium luxury car rental services in Dubai. Choose from a fleet of exotic cars for a memorable driving experience.",
  keywords: [
    'Luxury Car Rental Dubai',
    'Exotic Car Hire',
    'Premium Car Rentals',
    'Luxury Car Fleet',
    'Drive Exotic Cars',
    'Exotic Car Rental Dubai',
    'High-End Car Rentals',
    'Luxury Vehicle Rentals',
    'Luxury Car Brands',
    'Exotic Car Collection',
    'Sports Car Rental',
    'Supercar Hire Dubai',
    'Exotic Car Tours',
    'Luxury Driving Experience',
    'Rent Exotic Cars',
    'Prestige Car Rentals',
    'Luxury Car Models',
    'Dubai Luxury Car Hire',
    'Richylife Club',
    'Dubai UAE',
  ],
  openGraph: {
    title: 'Luxury Car Rental Dubai',
    description:
      "Experience luxury and style with Richylife Club's premium luxury car rental services in Dubai. Choose from a fleet of exotic cars for a memorable driving experience.",
    siteName: 'Richylife Club',
    images: [
      {
        url: `${process.env.WEB_URL}/assets/rentacar/opengraphimage.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/rentacar/opengraphimage.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

async function getData() {
  let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/car-makes?populate=*`;

  try {
    const res = await fetch(api, { next: { revalidate: 10 } });
    const data = await res.json();
    if (data == {}) {
      setStatus(true);
    }
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export default async function page() {
  const make = await getData();
  const carLogos = [
    '/assets/petpage/bear.png',
    '/assets/petpage/bear.png',
    '/assets/petpage/bear.png',
    '/assets/petpage/bear.png',
    '/assets/petpage/bear.png',
  ];

  return (
    <main>
      <h1 className="sr-only ">Luxury Car Rentals - Richylife Club</h1>
      <HeroSection
        posterurl={'/assets/rentacar/banner.png'}
        type={'video'}
        alt="Luxury Car rentals"
        url={'/assets/home/hero.mp4'}
      />
      <div className="mx-auto max-w-[1200px]">
        <ListingComponent
          variant={'car'}
          title={'Crafting Driving Experiences'}
          description={
            'Choose from Our Handpicked Selection of Luxurious Cars for an Unforgettable Ride'
          }
        />
      </div>
      <div className="container mx-auto mt-10">
        <Marquee images={make} />
      </div>
      <div className=" my-16 flex flex-col gap-9 md:gap-16">
        <SectionHeading
          title={'Picture Gallery'}
          description={
            'Duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.'
          }
        />
        <MasonryGrid />
      </div>
      <div className="my-9 md:my-16 px-6">
        <ContactForm
          title={'Get In touch'}
          description={'Experience Elegance & Convenience'}
        />
      </div>
    </main>
  );
}
