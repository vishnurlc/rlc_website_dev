import {
  HeroSection,
  HeroSection2,
  SectionHeading,
  YachtListing,
} from '@/components';
import Filter from '@/components/ui/filter/filter';
import MasonryGrid from '@/components/yachtrental/PictureGallery';
import React from 'react';

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
      </div>
    </main>
  );
}
