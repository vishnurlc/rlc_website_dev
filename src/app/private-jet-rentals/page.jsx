import {
  ContactForm,
  HeroSection,
  HeroSection2,
  SectionHeading,
} from '@/components';

import Jetcard from '@/components/privatejetrental/Jetcard';
import React from 'react';

export async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/private-jets?populate=*`,
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

export default async function PrivateJet() {
  const jets = await getData();
  return (
    <main>
      <h1 className="sr-only ">Private Jet Rentals - Richylife Club</h1>
      <HeroSection2
        type={'video'}
        heading1={'Private Jets'}
        heading2={'Rental in Dubai'}
        subheading={'Experience the extreme luxury with us'}
        posterurl={'/assets/privatejet/bannerimg.png'}
        btntext={'Book Now'}
        overlay={0}
      />

      <div className="py-[43px] md:py-[86px]">
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
                  url: item.attributes.image.data[0].attributes.formats.medium
                    .url,
                  slug: item.attributes.slug,
                }}
              />
            );
          })}
        </div>
        <ContactForm
          title={'Soar to New Heights'}
          description={'Book your journey with our private jet rental now'}
        />
      </div>
    </main>
  );
}
