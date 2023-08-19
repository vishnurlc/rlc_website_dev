import { ContactForm, GalleryJet, HeroCarousel } from '@/components';
import Image from 'next/image';
import qs from 'qs';
import React from 'react';

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
      'technicalspec.interior_color',
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
    console.log(data.data[0].attributes);
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
      </div>
      <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
        <div>
          <div>
            <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500">
              {car.data[0].attributes.make.data.attributes.make}
            </h1>
            <span className=" inline-block my-4 font-inter text-primary font-semibold text-xl md:text-[40px]">
              {car.data[0].attributes.name}
            </span>
          </div>
          <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
            {car.data[0].attributes.description}
          </p>
        </div>

        <div>
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
                {
                  car.data[0].attributes.technicalspec.interior_color.data
                    .attributes.color
                }
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
        <div>
          <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Gallery
          </h2>
          <div>
            <GalleryJet />
          </div>
        </div>
        <ContactForm
          title={'Soar to New Heights'}
          description={'Book your journey with our private jet rental now'}
        />
      </div>
    </main>
  );
}
