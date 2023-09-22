import {
  ContactForm,
  HeroSection2,
  ListingComponent,
  Loader,
  PictureGallery,
  Requirementforrent,
} from '@/components';
import React, { Suspense } from 'react';

export const metadata = {
  title: 'Luxury Car Rentals Dubai',
  description:
    "Experience the thrill of driving a luxury car in Dubai with Richylife Club's premium car rental service. Choose from a fleet of exotic cars, including Bentleys, Ferraris, and Lamborghinis, and enjoy a memorable driving experience.",
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
    'Dubai luxury car rental',
    'luxury car hire',
    'exotic car rental.',
  ],
  openGraph: {
    title: 'Luxury Car Rental Dubai',
    description:
      "Experience the thrill of driving a luxury car in Dubai with Richylife Club's premium car rental service. Choose from a fleet of exotic cars, including Bentleys, Ferraris, and Lamborghinis, and enjoy a memorable driving experience.",
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
    const res = await fetch(api, {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
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

  return (
    <main>
      <h1 className="sr-only">Luxury Car Rentals - Richylife Club</h1>
      <HeroSection2
        type={'image'}
        heading1={'Luxury Car'}
        heading2={'Rental in Dubai'}
        subheading={'Experience luxury on wheels'}
        posterurl={'/assets/rentacar/banner.png'}
        btntext={'Book your ride'}
        url={'/assets/rentacar/banner.png'}
        overlay={1}
      />
      <div className="mx-auto max-w-[1200px]">
        <Suspense fallback={<Loader />}>
          <ListingComponent
            variant={'car'}
            title={'Crafting Driving Experiences'}
            description={
              'Choose from Our Handpicked Selection of Luxurious Cars for an Unforgettable Ride'
            }
            make={make}
          />
        </Suspense>
      </div>

      {/* <div className=" my-16 flex flex-col gap-9 md:gap-16">
        <PictureGallery
          title={'Picture Gallery'}
          description={
            'Join our global community on Instagram for an exclusive glimpse into a world where opulence knows no bounds.'
          }
        />
      </div> */}
      <div className="my-9 md:my-16 px-6 max-w-[1200px] mx-auto">
        <Requirementforrent />
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
