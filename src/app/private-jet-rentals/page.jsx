import {
  ContactForm,
  HeroSection2,
  Loader,
  SectionHeading,
  WhyusPrivatejet,
} from '@/components';

import Jetcard from '@/components/privatejetrental/Jetcard';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Private Jet Rentals Dubai | Luxury Jet Charters',
  description:
    'Experience unparalleled luxury and comfort with private jet rentals in Dubai. Explore our fleet of exclusive jets for personalized travel and jet charters with Richylife Club.',
  keywords: [
    'Private Jet Rentals Dubai',
    'Luxury Jet Charters',
    'Private Jet Charter Services',
    'Exclusive Jet Hire',
    'Private Jet Charter Dubai',
    'Luxury Aircraft Rentals',
    'Personalized Jet Travel',
    'Jet Charter Packages',
    'Luxury Jet Experiences',
    'Private Aviation Dubai',
    'Private Jet Charter Destinations',
    'Jet Rental Offers',
    'Jet Travel Services',
    'VIP Jet Flights',
    'Executive Jet Rentals',
    'Dubai Jet Charters',
    'Luxury Air Travel',
    'Richylife Club',
    'Dubai UAE',
  ],
  openGraph: {
    title: 'Premium Jetski Rental Dubai | Exclusive Jetski Experiences',
    description:
      'Experience the thrill of riding premium jetskis in Dubai&apos;s crystal-clear waters. Book your exclusive jetski adventure with Richylife Club and enjoy adrenaline-pumping watersports.',
    siteName: 'Richylife Club',
    images: [
      {
        url: `${process.env.WEB_URL}/assets/privatejet/bannerimg.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/privatejet/bannerimg.png`,
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
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/private-jets?populate=*`,
      {
        next: { revalidate: 40 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log('s', error);
    return {};
  }
}

export default async function PrivateJet() {
  const jets = await getData();
  return (
    <main>
      <h1 className="sr-only ">Private Jet Rentals - Richylife Club</h1>
      <HeroSection2
        type={'video'}
        heading1={'Private Jets'}
        heading2={'Chaters in Dubai'}
        subheading={'Experience the extreme luxury with us'}
        posterurl={'/assets/privatejet/bannerimg.png'}
        btntext={'Book Now'}
        overlay={0}
      />

      <div className="py-[43px] md:py-[86px]">
        {jets.data.length > 0 ? (
          <>
            <SectionHeading
              title={'Indulge in Extravagance'}
              description={
                'Elevate Your Journey with Our Exclusive Private Jet Rentals'
              }
            />
            <div className="grid grid-cols-1 gap-6 md:gap-16 my-8 md:my-16">
              {jets.data.map((item, index) => {
                return (
                  <Jetcard
                    key={index}
                    data={{
                      title: item.attributes.name,
                      price: item.attributes.price,
                      url: item.attributes.image.data[0].attributes.formats
                        .medium.url,
                      slug: item.attributes.slug,
                    }}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="min-h-[50vh] flex flex-col items-center justify-center">
            <h2 className="text-center text-primary text-xl">
              No Private Jets available.{' '}
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I would like to know more about Richylife Club Private Jet Rentals?`}
              >
                Contact us
              </Link>
            </h2>
          </div>
        )}

        <div className="my-9 md:my-16 px-6 max-w-[1200px] mx-auto">
          <WhyusPrivatejet />
        </div>
        <div className="px-4">
          <ContactForm
            title={'Soar to New Heights'}
            description={'Book your journey with our private jet rental now'}
          />
        </div>
      </div>
    </main>
  );
}
