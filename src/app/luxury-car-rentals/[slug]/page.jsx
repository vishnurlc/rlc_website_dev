import {
  CarSpec,
  ContactForm,
  GalleryJet,
  HeroCarousel,
  TechnicalSpec,
} from '@/components';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';
import { Button } from '@/components/ui/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import qs from 'qs';
import React from 'react';

export async function generateMetadata({ params }) {
  try {
    const car = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars?filters[slug][$eq]=${params.slug}&populate=image`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    ).then((res) => res.json());
    return {
      title: car.data[0].attributes.name || 'Luxury Cars for Rental In Dubai ',
      description:
        car.data[0].attributes.description ||
        'Luxury Cars rental with Richylife Club',
      openGraph: {
        type: 'website',
        title:
          car.data[0].attributes.name || 'Luxury Cars for Rental In Dubai ',
        description:
          car.data[0].attributes.description ||
          'Luxury Cars rental with Richylife Club',
        images: [
          {
            url: `${car.data[0].attributes.image.data[0].attributes.url}`,
            width: 800,
            height: 600,
          },
          {
            url: `${car.data[0].attributes.image.data[0].attributes.url}`,
            width: 300,
            height: 200,
          },
        ],
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getData(slug) {
  const query = qs.stringify({
    populate: [
      'image',
      'body',
      'fuel',
      'make',
      'seat',
      'year',
      'car_colors',
      'features.icon',
      'technicalspec.body',
      'technicalspec.color',
      'technicalspec.cylinder',
      'technicalspec.interior_colors',
      'technicalspec.seat',
      'technicalspec.transmission',
      'technicalspec.fuel',
      'deposit',
    ],
  });
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars?filters[slug][$eq]=${slug}&${query}`,
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

export default async function CarDetail({ params: { slug } }) {
  const car = await getData(slug);

  return (
    <main className="">
      <div>
        <HeroCarousel
          data={car.data[0].attributes.image}
          name={car.data[0].attributes.name}
        />
        <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
          <h2 className="text-right">
            <span className="text-xl text-primary">
              AED{car.data[0].attributes.price}/Day
            </span>
          </h2>

          <AnimatedBtn
            styles={'rounded-md bg-primary text-white'}
            text={'Book Now'}
            msg={'Hi, I would like to know about your services.'}
          />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
        <div>
          <div>
            <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500">
              {car.data[0].attributes.make.data.attributes.make}
            </h1>
            <span className=" inline-block my-2 md:my-4 font-inter text-primary font-semibold text-2xl md:text-[40px]">
              {car.data[0].attributes.name}
            </span>
          </div>
          <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
            {car.data[0].attributes.description}
          </p>
        </div>

        <TechnicalSpec car={car} />
        <CarSpec car={car} />
        {/* <div>
          <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Gallery
          </h2>
          <div>
            <GalleryJet />
          </div>
        </div> */}
        <ContactForm
          title={'Sail in Luxury'}
          description={'Book your journey with our luxury yacht rentals now'}
        />
      </div>
    </main>
  );
}

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cars`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });

  const data = await res.json();
  return data.data.map((car) => ({
    slug: car.attributes.slug,
  }));
};
