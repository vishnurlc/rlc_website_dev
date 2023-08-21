import { ContactForm, GalleryJet, HeroCarousel } from '@/components';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';
import { Button } from '@/components/ui/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import qs from 'qs';
import React from 'react';

export async function generateMetadata({ params }) {
  try {
    const car = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars?filters[slug][$eq]=${params.slug}&populate=image`
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
      'car_color',
      'features.icon',
      'technicalspec.body',
      'technicalspec.color',
      'technicalspec.cylinder',
      'technicalspec.interior_colors',
      'technicalspec.seat',
      'technicalspec.transmission',
      'technicalspec.fuel',
    ],
  });
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars?filters[slug][$eq]=${slug}&${query}`,
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

export default async function CarDetail({ params: { slug } }) {
  const car = await getData(slug);

  return (
    <main className="">
      <div>
        <HeroCarousel
          data={car.data[0].attributes.image}
          name={car.data[0].attributes.name}
        />
        <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5">
          <h2 className="text-right">
            <span className="text-xl text-primary">
              AED{car.data[0].attributes.price}/Day
            </span>
          </h2>
          <Link href={'#'}>
            <AnimatedBtn
              styles={'rounded-md bg-primary text-white'}
              text={'Book Now'}
            />
          </Link>
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

        <div className="">
          <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Technical Specifications
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-9">
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Car Body</span>
              <span className="text-[#8a97a4]">
                {car.data[0].attributes.body.data.attributes.type}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Fuel Type</span>
              <span className="text-[#8a97a4]">
                {car.data[0].attributes.fuel.data.attributes.type}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>No of Cylinder</span>
              <span className="text-[#8a97a4]">
                {
                  car.data[0].attributes.technicalspec.cylinder.data.attributes
                    .cylinders
                }
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Interior Color</span>
              <span className="text-[#8a97a4]">
                {car.data[0].attributes.technicalspec.interior_colors.data
                  .map((item) => item.attributes.color)
                  .join('+')}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Exterior Color</span>
              <span className="text-[#8a97a4]">
                {car.data[0].attributes.car_color.data.attributes.color}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Seats</span>
              <span className="text-[#8a97a4]">
                {car.data[0].attributes.seat.data.attributes.seat}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Transmission</span>
              <span className="text-[#8a97a4]">
                {
                  car.data[0].attributes.technicalspec.transmission.data
                    .attributes.type
                }
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Horse Power</span>
              <span className="text-[#8a97a4]">
                {car.data[0].attributes.technicalspec.horsepower}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Engine Capacity</span>
              <span className="text-[#8a97a4]">
                {car.data[0].attributes.technicalspec.engine_capacity}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Year</span>
              <span className="text-[#8a97a4]">
                {car.data[0].attributes.year.data.attributes.year}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Mileage Limit</span>
              <span className="text-[#8a97a4]">
                {car.data[0].attributes.technicalspec.mileage_limit}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Car Specifications
          </h2>
          <ul className="grid grid-cols-1 list-disc">
            {car.data[0].attributes.features.data.map((feature, index) => (
              <li
                key={index}
                className="flex  font-inter text-sm md:text-lg w-full items-center gap-4 justify-start py-2 md:py-4 "
              >
                <span className="text-[#8a97a4]">
                  <Image
                    src={feature.attributes.icon.data.attributes.url}
                    alt={feature.feature}
                    width={30}
                    height={30}
                  />
                </span>
                <span>{feature.attributes.feature}</span>
              </li>
            ))}
          </ul>
        </div>
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
