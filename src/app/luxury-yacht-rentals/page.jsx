import {
  ContactForm,
  HeroSection,
  HeroSection2,
  SectionHeading,
  YachtListing,
} from '@/components';
import Filter from '@/components/ui/filter/filter';
import MasonryGrid from '@/components/yachtrental/PictureGallery';
import React from 'react';

export const metadata = {
  title: 'Luxury Yacht Rental Dubai | Exclusive Yacht Charters',
  description:
    'Discover the ultimate luxury yacht rental experience in Dubai with Richylife Club. Explore our fleet of exclusive yachts for unforgettable charters and sea adventures.',
  keywords: [
    'Luxury Yacht Rental Dubai',
    'Exclusive Yacht Charters',
    'Yacht Charter Services',
    'Luxury Yacht Fleet',
    'Private Yacht Hire',
    'Yacht Charter Dubai',
    'Yacht Rental Packages',
    'Yacht Cruises',
    'Luxury Yacht Tours',
    'Private Yacht Experiences',
    'Dubai Yacht Rentals',
    'Yacht Charter Destinations',
    'Yacht Rental Offers',
    'Yacht Vacation Dubai',
    'Luxury Yacht Events',
    'Sea Adventures',
    'Private Yacht Tours',
    'Richylife Club',
    'Dubai UAE',
  ],
  openGraph: {
    title: 'Luxury Yacht Rental Dubai | Exclusive Yacht Charters',
    description:
      'Discover the ultimate luxury yacht rental experience in Dubai with Richylife Club. Explore our fleet of exclusive yachts for unforgettable charters and sea adventures.',
    siteName: 'Richylife Club',
    images: [
      {
        url: `${process.env.WEB_URL}/assets/privateyachts/opengraphimage.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/privateyachts/opengraphimage.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/yachts?populate=*`,
      {
        next: { revalidate: 40 },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log('s', error);
    return {};
  }
}

export default async function page() {
  const yachts = await getData();
  return (
    <main>
      <h1 className="sr-only ">Luxury Yacht Rentals - Richylife Club</h1>
      <HeroSection2
        type={'video'}
        heading1={'Luxury Yacht'}
        heading2={'Rental in Dubai'}
        subheading={'Experience the sea breeze in luxury'}
        posterurl={'/assets/privateyachts/banner.png'}
        btntext={'Book your trip'}
        url={'/assets/home/hero.mp4'}
        overlay={1}
      />
      <div className="mx-auto max-w-[1200px]">
        <YachtListing data={yachts} variant={'yacht'} />
      </div>
      <div className=" my-16 flex flex-col gap-9 md:gap-16">
        <SectionHeading
          title={'Picture Gallery'}
          description={
            'Duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.'
          }
        />

        <MasonryGrid />
        <div className="my-9 md:my-16 px-6">
          <ContactForm
            title={'Set Sailing Now'}
            description={'Book your adventurous Journey with us'}
          />
        </div>
      </div>
    </main>
  );
}
